class Subject < ActiveRecord::Base
  has_many :tasks
  validates :name, presence: true
  validates :instruction, presence: true

  accepts_nested_attributes_for :tasks 
end
