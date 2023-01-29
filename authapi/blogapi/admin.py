from django.contrib import admin
from .models import Post, Category


class PostAdmin(admin.ModelAdmin):
    list_display = ('title','name', 'slug', 'created_at', 'category')
    search_fields = ('title', 'content')
    list_filter = ('created_at', 'category')
    
    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name','id')
    # search_fields = ('title', 'content')
    # list_filter = ('created_at', 'category')
    

admin.site.register(Post, PostAdmin)

admin.site.register(Category, CategoryAdmin)
