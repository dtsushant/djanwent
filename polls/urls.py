from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),

    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('doSomething/',views.doSomething,name='doSomething'),
    path('doAnotherthing/',views.doAnotherthing,name='doAnotherthing'),
    path('test/',views.test,name='test'),
    path('autoview/',views.AutoView.as_view(),name='autoview'),
    path('specifics/<int:pk>/', views.DetailView.as_view(), name='detail2'),
    path('<int:pk>/results2/', views.ResultsView.as_view(), name='results2'),
]