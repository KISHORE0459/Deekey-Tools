const LocationSection = () => {
  return (
    <div className="flex-1 w-full min-h-[300px] md:h-[400px] mt-6 md:mt-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124518.01116859357!2d77.64680774756746!3d12.766309622623304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae710998226833%3A0x325f5d391e3343f3!2sDEEKEY%20TOOLS!5e0!3m2!1sen!2sin!4v1757851349109!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full min-w-full h-[450px]"
      ></iframe>
    </div>
  );
};

export default LocationSection;
