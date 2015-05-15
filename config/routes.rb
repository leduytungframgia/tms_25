Rails.application.routes.draw do
  root 'static_pages#home'
  get 'help' => 'static_pages#help'
  get 'sessions/new'
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  resources :users, only: [:index, :show]
  resources :subjects, only: [:index, :show]

  namespace :supervisor do
    root  'users#index'
    resources :users
    resources :courses
    resources :subjects do
      resources :tasks
    end
  end
end
