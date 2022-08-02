# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The Class named 'BlogPostsController' is the controller. The controller has part to do in the interation between the user, the views, and the model. It is the controller that holds methods. It can also render with instance variables.
class BlogPostsController < ApplicationController
  def index
    # ---2) This will return all of the blog posts that have been created. @posts is plural because it will show the whole cache of blog posts that were correctly created by calling BlogPost.all.
    @posts = BlogPost.all
  end

  # ---3) A method named 'show' will take params of the id of the item. Show is a part of the RESTFUL routes and it will single down what you are looking for. It is like selecting a specific item instead of all the posts created.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The 'new' method is to direct the user to a page to create a new post. It is also a RESTFUL route. It is considered a form and the user will have the ability in this BlogPost app to create a new post that will be add in the index when we call for (.all). The new will give the user an area for user input as part of creating the new post. And a submit button to send the content to the show/index. The next step is to send this to the 'create' method.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The method 'create' is to allow the user to add a new blog post. This method submits user data to the database. The 'create' posts the new content to be seen in @posts. With the 'create' method we need to give it a 'private' method that requires hard parameters. Then it will link_to 'new'.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This allows you to select a specific id that needs to be edited. It will identify only the id provided to search for.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Above will identify only the id given. Below will update the edited post requiring the strong params from the private method. Rendering the successful update/edit, and/or redirecting to the blog_post_path with new @post then @posts.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This is the redirection catch all back to blogs with the post because '@post.destroy' was not met.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private method gives the ability to require params and it is private so that way the Class knows that is holds code that will be accessed within the other methods.
  private
  def blog_post_params
    # ---10) These are the strong params reqiured (blog_post as a whole) and which params are permitted (the title and content) to the update and create methods.
    params.require(:blog_post).permit(:title, :content)
  end
end
