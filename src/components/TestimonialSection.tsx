import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ravi Bhawsar",
      company: "Sabgumo.com",
      role: "Founder",
      content: "Aadarsh transformed our vision for Sabgumo.com into a fast, user-friendly platform. His technical skills and clear communication made the process seamless.",
      rating: 5,
      image: "🌐"
    },
    {
      name: "Nikhil",
      company: "PetJunction",
      role: "Owner",
      content: "From concept to launch, Aadarsh handled everything for PetJunction with professionalism. The website looks stunning and our customers love the smooth experience.",
      rating: 5,
      image: "🐾"
    },
    {
      name: "Dimple Bhawsar",
      company: "Udaipur Animal Feed (UAF)",
      role: "Co-Founder",
      content: "We needed an online presence that matched our brand's reliability, and Aadarsh delivered exactly that. UAF's new site has helped us reach more customers than ever.",
      rating: 5,
      image: "🐄"
    },
    {
      name: "Mr. Anurag",
      company: "Mushroom Juniors",
      role: "Founder",
      content: "Aadarsh created a modern, easy-to-manage site for Mushroom Juniors that has boosted our brand visibility. His attention to detail and dedication were outstanding.",
      rating: 5,
      image: "🍄"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients I've had the privilege to work with
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover-grow relative overflow-hidden"
            >
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Client info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
