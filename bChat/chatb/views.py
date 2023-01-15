from django.shortcuts import render
from django.http import JsonResponse

def chatbot_view(request):
    user_input = request.GET.get('user_input')
    if "hi" in user_input.lower():
        response = "Hello, how can I help you?"
    elif "help" in user_input.lower():
        response = "I am a simple chatbot. You can ask me anything."
    elif "you" in user_input.lower():
        response = "I am a dangerous chatbot. I can hack your computer"
    elif "ayon" in user_input.lower():
        response = "Ayon is anonymous hacker, sometimes found on Dark Web."
    else:
        response = "I am sorry, I didn't understand your request."
    return JsonResponse({'response': response})