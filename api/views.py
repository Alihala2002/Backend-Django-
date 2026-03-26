from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ContactMessage

@api_view(['GET'])
def get_profile_data(request):
    data = {
        "name": "Ali Halayqa",
        "title": "Computer Engineer & Backend Developer",
        "youtube_stats": "85,000+ Subscribers",
        "links": {
            "github": "https://github.com/Alihala2002",
            "linkedin": "https://www.linkedin.com/in/ali-halayqa/",
            "youtube": "https://www.youtube.com/@MaestroComedy8"
        },
        "projects": [
            {
                "id": 1,
                "title": "Flowless Smart Water Management",
                "description": "Developed and optimized backend services for IoT-based water leakage detection systems during my internship.",
                "tech": ["Python", "Django", "IoT Data Processing"],
                "link": "#"
            },
            {
                "id": 2,
                "title": "Maestro Comedy Digital Brand",
                "description": "Led the technical and creative production for a comedy brand, achieving 85K+ subscribers with 5M+ views.",
                "tech": ["Video Engineering", "Analytics", "Audience Growth"],
                "link": "https://www.youtube.com/@MaestroComedy8"
            }
        ]
    }
    return Response(data)

@api_view(['POST'])
def send_contact(request):
    # استقبال البيانات من React
    try:
        data = request.data
        ContactMessage.objects.create(
            name=data['name'],
            email=data['email'],
            message=data['message']
        )
        return Response({"success": True, "message": "Secure Message Received! ✅"})
    except Exception as e:
        return Response({"success": False, "message": str(e)}, status=400)