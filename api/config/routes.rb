Rails.application.routes.draw do
  namespace :api do
    resources :boards, only: [:index, :update]
  end
end
