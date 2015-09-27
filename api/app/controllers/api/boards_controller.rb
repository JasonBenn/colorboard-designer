class Api::BoardsController < ApplicationController
  def index
    render json: { data: Board.all }
  end

  # Todo: move to a utils file
  def map_keys(hash)
    hash.map { |k, v| { yield(k) => v } }.reduce(:merge)
  end

  def update
    board = Board.update_or_create(map_keys(board_params) { |k| k.underscore })
    if board.valid?
      render json: { data: board }
    else
      render json: { errors: board.errors }, status: 400
    end
  end

  def board_params
    # Todo: look up that munge rule that lets you permit arrays/hashes from params
    params.require(:board).permit(:id, :numRows, :numCols)
      .merge(colored: params[:board][:colored])
  end
end
