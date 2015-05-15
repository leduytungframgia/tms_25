class Subject < ActiveRecord::Base
  has_many :subject_courses
  has_many :courses, through: :subject_courses
  has_many :tasks, dependent: :destroy
  
  validates :name, presence: true
  validates :instruction, presence: true

  accepts_nested_attributes_for :tasks, reject_if: lambda {|a| a[:title].blank?}, allow_destroy: true
end
