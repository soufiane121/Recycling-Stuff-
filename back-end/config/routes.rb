Rails.application.routes.draw do
  resources :items
  resources :users

  get '/autologin', to: 'auth#autologin'
  post '/login', to: 'auth#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
