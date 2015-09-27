class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards, id: :uuid do |t|
      t.integer :num_rows
      t.integer :num_cols
      t.text :colored

      t.timestamps null: false
    end
  end
end
