import { Quote } from "lucide-react";
import Image from "next/image";

export function StoriesSection() {
  const stories = [
    {
      name: "Amina",
      age: 12,
      story:
        "Before Nhyira Foundation, I couldn't go to school. Now I'm learning to read and write, and I dream of becoming a teacher to help other children like me.",
      image: "/young-african-girl-student-smiling.jpg",
    },
    {
      name: "Kofi",
      age: 14,
      story:
        "The home-based education program changed my life. I can now help my younger siblings with their studies and plan to study engineering.",
      image: "/young-african-boy-student-studying.jpg",
    },
    {
      name: "Esi",
      age: 10,
      story:
        "I love learning math and science. The teachers are so kind and patient. I want to become a doctor and help people in my community.",
      image: "/young-african-girl-with-books-smiling.jpg",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stories of Hope
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real children, real dreams, real impact. Meet some of the students
              whose lives have been transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    width={300}
                    height={500}
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    {story.story}
                  </p>
                  <div>
                    <p className="font-bold text-lg">{story.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Age {story.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
