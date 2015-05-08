class SubjectsController < ApplicationController
  def new
    @subject = Subject.new
  end

  def create
    @subject = Subject.new subject_params
    if @subject.save
      flash[:success] = t(:created)
      redirect_to @subject
    end
  end

  def show
    @subject = Subject.find params[:id]
  end

  def edit
  end

  def destroy
  end

  private
  def subject_params
    params.require(:subject).permit :name, :instruction
  end
end
