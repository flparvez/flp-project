from django.urls import path, include
from blogapi import views

urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('blogs/', views.PostList.as_view()),

    # path('blogsD/', views.PostDetail.as_view, name="blogDetails"),
    path('blogsD/', views.PostDetail.as_view({'get': 'list'})),
    # path('blogs/<int:id>/', views.PostDetail.as_view()),
    # path('api-auth/', include('rest_framework.urls')),
]