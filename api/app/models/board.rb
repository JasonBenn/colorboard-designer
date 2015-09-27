class Board < ActiveRecord::Base
  validates :num_rows, :num_cols, numericality: { only_integer: true, greater_than: 0 }
  validates :id, uuid: true
  validates :colored, presence: true
  serialize :colored, JSON
  extend IdempotentHelpers
end
