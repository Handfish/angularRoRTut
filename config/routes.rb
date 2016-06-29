Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   
  root to: 'application#angular'

  resources :posts, defaults: {format: 'json'}, only: [:create, :index, :show] do
    resources :comments, defaults: {format: 'json'}, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put 'upvote' => 'posts#upvote'
    end
  end

end
