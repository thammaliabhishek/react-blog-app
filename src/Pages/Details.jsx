import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "MAHESH BABU",
      "Image": "https://www.pngitem.com/pimgs/m/314-3148559_mahesh-babu-png-image-title-mahesh-babu-transparent.png",
      "category": "Tollywood",
      "description": "It seems like the diamonds on the plate are to blame here. According to a close friend of the actor the nameplate was taken down for reasons of safety.“That is one expensive nameplate, probably one of its kind in the entire world, and so after it was put up, it was brought to the host’s attention that it was not safe to have precious stones studded on to the wall. Shah Rukh decided to remove the nameplate from its place of public accessibility for the time being,” the friend reveals."
    },
    {
      "id": 51,
      "title": "PAWAN KALYAN",
      "Image": "https://www.pngpix.com/wp-content/uploads/2021/05/PNGPIX-COM-pawn-kalyan-PNG-Transparent-Image-1.png",
      "category": "Tollywood",
      "description": "Pawan Kalyan was introduced to Telugu Cinema as Kalyan Babu with the film ‘Akkada Ammayi Ikkada Abbayi’ in the year 1996. Pawan Kalyan and his family members, especially Chiranjeevi, are devotees of Lord Hanuman. Hence to reflect their deity’s name, he changed his name to Pawan Kalyan. His second film ‘Gokulamlo Seetha’ was released in the year 1977. Both the film added less to his career."
    },
    {
      "id": 2,
      "title": "KEERTHI SURESH",
      "Image": "https://p.kindpng.com/picc/s/112-1120880_png-jewellers-ad-keerthi-suresh-in-avr-jewellery.png",
      "category": "Tollywood",
      "description": "KEERTHI SURESH is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
    },
    {
      "id": 61,
      "title": "KEERTHI SURESH",
      "Image": "https://p.kindpng.com/picc/s/112-1120880_png-jewellers-ad-keerthi-suresh-in-avr-jewellery.png",
      "category": "footer1",
      "description": " KEERTHI SURESH is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
    },
    
    {
      "id": 3,
      "title": "RRR and Everything You Need to Know About Tollywood Cinema",
      "Image": "https://www.thetelugufilmnagar.com/wp-content/uploads/2021/12/Rajamouli-opens-up-about-RRR-Intro-Scene.png",
      "category": "Tollywood",
      "description": "We’re talking, of course, about the absolutely incredible and insane Indian Telugu-language epic action drama film RRR, which was the most expensive Indian film ever made and has pushed Bollywood (and more specifically, the Telugu-language “Tollywood” film industry) into the mainstream."
    },
    {
      "id": 4,
      "title": "Allu Arjun Recovers from COVID 19, Tests Negative",
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPRgx_b8KVHLF5X09VV5Gb1kvdyXIqfCK4ZMzppmHKZqruzv07NnPLLiz0tNmifytxvk&usqp=CAU",
      "category": "Tollywood",
      "description": "As we all know, Allu Arjun who contracted COVID-19 15 days ago has tested negative for the virus today. Soon after his test result came out negative, he left to his residence to meet his family."
    },  
  {
    "id": 11,
    "title": "SPIDER-MAN ",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwy4MIqyc8GjiKdlup8gESArcT10SP66wsiQ&usqp=CAU",
    "category": "Hollywood",
    "description": "Season two  been out for a week, yet attention has already turned to season three following confirmation the Netflix series will continue.However as the series about the drug trade continues, its lead villain - Pablo Escobar - will no longer feature in the show"
  },
  {
    "id": 55,
    "title": "Broadway International Film Festival ",
    "Image": "https://static.wixstatic.com/media/b30e1c_3aee211bfa9243cfb23d7a8fe5ac32aa~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b30e1c_3aee211bfa9243cfb23d7a8fe5ac32aa~mv2.jpg",
    "category": "mix",
    "description": "Heart Of Hollywood Magazine recently had the honor of being a part of the Broadway International Film Festival, which showcased short films from different countries, with a strong focus on Latin America."
  },
  {
    "id": 12,
    "title": " Learn The Simplest and Easy Way to Add a Photo to Your Acting Resume in Word ",
    "Image": "https://static.wixstatic.com/media/b30e1c_406350e870c3445ab265df771b8b2a83~mv2.jpg/v1/fill/w_925,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b30e1c_406350e870c3445ab265df771b8b2a83~mv2.jpg",
    "category": "Hollywood",
    "description": "Learn the simplest and easy way to add a photo to the upper right hand corner of your acting resume in word. People who are viewing your resume will continue seeing your face."
  },
  {
    "id": 13,
    "title": "2022 Male R&B Artist of The Year Nominee at The Queen City Awards, Mr. Chenier ",
    "Image": "https://static.wixstatic.com/media/5c158e_e73ecf20829d494bbaf199e7c8432a87~mv2.jpeg/v1/fill/w_1072,h_1428,al_c,q_90/5c158e_e73ecf20829d494bbaf199e7c8432a87~mv2.webp",
    "category": "Hollywood",
    "description": "He is an all-around entertainer, From music to film, his goal is to represent the Grown and Sexy movement in R&B music to the fullest. In addition to being a multi-award-winning music artist and nominee, he’s also opened for Ginuwine, J. Holiday, Avant, Kelly Price, Dru Hill, and Tony Terry.     "
  },
  {
    "id": 62,
    "title": "FASHION TIP FOR THE DAY ",
    "Image": "https://static.wixstatic.com/media/1b0399_2ca49f8079df40aa953252fd20a28038~mv2.jpg/v1/fill/w_450,h_629,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1b0399_2ca49f8079df40aa953252fd20a28038~mv2.jpg",
    "category": "footer2",
    "description": "In a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I relive the trauma, even from training to do. In my movie, for instance, for training for Aquaman, a combat scene and a trigger happen. I have a meltdown and have to deal with that, the crew I work with have to deal with that, because of the damage I walk around with every single day. I am not sitting in this courtroom snickering. I’m not sitting in this courtroom laughing, smiling, or making snide jokes. I’m not. This is horrible. A jury is scheduled to hear the closing arguments on Friday in Johnny's lawsuit against Amber. Each side will have two hours to summarise their case in a trial that has stretched on for six weeks. Johnny Depp is suing Amber for $50 million in Virginia's Fairfax County Circuit Court over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse”. His lawyers say he was defamed by the article even though it never mentioned his name."
  },
  {
    "id": 15,
    "title": "Elon Musk to borrow less in Twitter bid, filing says ",
    "Image": "https://images.hindustantimes.com/img/2022/05/26/550x309/TWITTER-AGM-0_1653534087051_1653534101559.JPG",
    "category": "Hollywood",
    "description": "Tesla CEO Elon Musk has been courting major Twitter investors including co-founder Jack Dorsey in the hope of getting them to partner with him in taking the San Francisco-based company private.Elon Musk notified US regulators on Wednesday that he will rely less on loans in his bid to buy Twitter, as he and partners put $33.5 billion into the deal.Twitter shares climbed more than 5 percent on the news, as the market evidently took it as a sign the acquisition is moving forward despite Musk declaring it on hold due to his concerns about the number of accounts that might be software bots instead of real people. Musk said in the regulatory filing that he had new commitments that will allow him to rely less on loans to buy Twitter, but did not specify whether he was reaching into his own pocket for money or had won over others with big stakes in the company Analysts were concerned about Musk using billions of dollars worth of his Tesla shares to back loans, meaning the electric car company's stock price would be affected by the fortunes of Twitter  ."
  },
  {
    "id": 16,
    "title": "Explained: Will Amber Heard or Johnny Depp go to prison if other party wins? ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/Amber_Johnny_1653803672420_1653803684854.jpeg",
    "category": "Hollywood",
    "description": "ohnny Depp and Amber Heard’s bitter and public defamation trial came to a close on Friday as both parties rested their case, and the judge handed the case over to the jury. Now, the jury will deliberate over the case’s facts and findings and deliver their verdict next week. The high-profile defamation trial has seen its fair share of twists and turns. But now the question on everyone’s lips is what would be the outcome. As per reports, Johnny Depp is heavily favoured to emerge victorious in his suit against his ex-wife. But if he does win, what does that mean for Amber? We take a look.Johnny has sued Amber for $50 million saying she defamed him when she claimed to be a victim of domestic violence in a Washington Post op-ed in 2018. Johnny’s lawyers have said that even though Amber didn’t name him, the implication damaged his career. He has further alleged that Amber was abusive towards him during their marriage. Amber has countersued him for $100 million claiming that he has smeared her name by calling her a liar. She has maintained that she suffered physical and sexual abuse at Johnny’s hands. Both trials ran concurrently in a Virginia court for over six weeks. The hearings ended on May 27."
  },
  {
    "id": 21,
    "title": "REACT",
    "Image": "https://flyclipart.com/thumb2/react-logo-import-io-221727.png",
    "category": "Technology",
    "description": "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development"
  },
  {
    "id": 56,
    "title": "Apple settles lawsuit with developer over App Store rejections and scams ",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?w=1390&crop=1",
    "category": "mix",
    "description": "The case had been a high-profile example of developer discontent with Apple’s App Store business. Many developers have become dissatisfied not only with the requirement to pay Apple commissions on their own sales"
  },
  {
    "id": 52,
    "title": "Google will allow alternative payment systems for Play Store in more countries ",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1235737290.jpeg?w=1390&crop=1",
    "category": "technology",
    "description": "Google announced today it’s expanding the user choice billing program for Play Store — which lets users choose alternative payment systems for in-app purchases — to India, Australia, Indonesia, Japan, and the European Economic Area."
  },
  {
    "id": 22,
    "title": "Google announced today it’s expanding the user choice billing program for Play Store — which lets users choose alternative payment systems for in-app purchases — to India, Australia, Indonesia, Japan, and the European Economic Area.",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/09/rocket-lab-test.jpg?w=1390&crop=1",
    "category": "Technology",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 63,
    "title": "Google, YouTube outline plans for the US midterm elections ",
    "Image": "https://techcrunch.com/wp-content/uploads/2020/06/GettyImages-1149449084.jpg?w=1390&crop=1",
    "category": "footer3",
    "description": "When users search for election content on either Google or YouTube, recommendation systems are in place to highlight journalism or video content from authoritative national and local news sources such as The Wall Street Journal, Univision, PBS NewsHour and local ABC, CBS and NBC affiliates."
  },
  {
    "id": 22,
    "title": "Daily Crunch: Ring wants to upgrade your apartment’s intercom system ",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/08/Ring-Intercom-1.jpg?w=1390&crop=1",
    "category": "Technology",
    "description": "Today, Haje is particularly psyched that he was able to talk the TechCrunch Plus team into letting him publish one of his Pitch Deck Teardowns without the paywall. If you’re not a TC+ subscriber, and you’re curious what a critique of a $65 million funding round at a $1.7 billion valuation looks like, it’s your lucky day. In addition to the freebie, it may be a particularly good time to subscribe, though, because we’re running a Labor Day sale on annual TC+ memberships."
  },
  {
    "id": 23,
    "title": "Apple may have given us a hint at its AR/VR headset’s nam",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/08/spine1-1-e1660049529931.jpg?w=1390&crop=1",
    "category": "Technology",
    "description": "Apple’s highly anticipated mixed reality headset may now have a name, according to a Bloomberg report earlier this week. The outlet spotted trademarks in the U.S. and global markets related to the device that were filed by Apple-affiliated firms. Names like “Reality One,” “Reality Pro” and “Reality Processor” were filed by a supposed shell corporation — Immersive Health Solutions LLC — with the "
  },
  {
    "id": 25,
    "title": "Withing’s new scale takes body-composition measuring to a new leve ",
    "Image": "https://techcrunch.com/wp-content/uploads/2022/09/Withings-Body-Comp.jpg?w=1390&crop=1",
    "category": "Technology",
    "description": "Following hot on the heels of the Withings Body Scan, the company today announced a new smart scale. Body Comp is a “complete body assessment scale” that makes biomarkers that are usually reserved for professional clinical settings, available for at-home users. It also announced Health+, an enhanced service providing detailed health analysis and tools to help people improve their health."
  },
  {
    "id": 31,
    "title": "Nerd Fitness",
    "Image": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/nerd_fitness_400x400.png?w=525",
    "category": "Fitness",
    "description": "A self-described community of “underdogs, misfits, and mutants” ready and willing to help people with every step of their fitness journey, Nerd Fitness is a comprehensive resource that’s motivating and inspiring. Sure, they’ll teach you how to work out without a gym and how to prepare a basic meal, but they also focus on helping you fix your own mindset, develop positive habits, and really change your life one step at a time."
  },
  {
    "id": 32,
    "title": "How to Make a Homemade Punching Bag ",
    "Image": "https://rosstraining.com/images/homemade-heavy-bag.jpg",
    "category": "Fitness",
    "description": "As mentioned recently, if you’re stuck in quarantine and unsure of how to train, it’s useful to study those who thrived in minimalist environments. In other words, learn from those who walked the walk. And some of the best examples you’ll find come from old school fighters. It was their life, not just something they tried for a few weeks. With that "
  },
  {
    "id": 33,
    "title": " Resistance Band Handles and Accessories",
    "Image": "https://rosstraining.com/images/resistance-bands-ross-enamait-blog.jpg",
    "category": "Fitness",
    "description": "Following a recent entry about resistance band training, I received numerous questions about the handles demoed throughout the video. With that in mind, I’ll use this entry to provide a few answers and instructions. Resistance bands can obviously be used on their own, but there are times when I enjoy adding "
  },
  {
    "id": 34,
    "title": "Homemade PVC Parallettes ",
    "Image": "https://rossboxing.com/images/ross_apparel_275.jpg",
    "category": "Fitness",
    "description": "I recently shared an image of handstand pushups from my homemade PVC parallettes. Shortly after posting the picture, questions began trickling into my inbox about how to make the parallettes and whether or not they were durable. With that in mind, I’ll use this short entry to address those questions as I’ve had the parallettes"
  },
  {
    "id": 35,
    "title": "HOW TO DEADLIFT: THE 9 BEST COACHING TIPS ",
    "Image": "https://tonygentilcore.com/wp-content/uploads/2022/08/112721194_l-825x386.jpg",
    "category": "Fitness",
    "description": "I know this seems very uncharacteristic of me and something I normally don’t write about, but I recently collaborated with my good friend Andrew Coates and wrote an extensive article on hornets deadlifts. I don’t know the exact number, but it’s around my 37th article on T-Nation on the topic…;o) Deadlifts: A Complete Guide Andrew  "
  },
  {
    "id": 37,
    "title": "4 TIPS I’D GIVE MYSELF ON DAY 1 OF MY FITNESS JOURNEY",
    "Image": "https://tonygentilcore.com/wp-content/uploads/2022/07/130674205_l-825x386.jpg",
    "category": "mix",
    "description": "As I type these words on my keyboard I am aboard an Irish Rail train en route to Galway. We just spent the past five days in Dublin being tourists making the typical pit stops at sites like Trinity College, the Temple Bar neighborhood, and I even had a Guinness at the renowned Gravity Ba"
  },
 
 
  {
    "id": 42,
    "title": "Green Chile Sauce",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/green-chile-sauce-5705w-2048x1366.webp",
    "category": "Food",
    "description": "Green chile sauce, along with red, are the backbones of New Mexican cuisine. The two flavorful chile sauces are used liberally, smothering and infusing all sorts of New Mexican dishes."
  },
  {
    "id": 43,
    "title": "Chile Relleno",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/chile-relleno-5645w-2048x1366.webp",
    "category": "Food",
    "description": "Cutting into a crispy chile relleno and having the melty cheese ooze out is a sure fire way to get your appetite going. It’s the ultimate comfort food: crispy, cheesy, saucy, with a little bit of heat to keep you going back for more. It’s even better when you cut off a bit and wrap it into a little fluffy tortilla blanket with beans for a chile relleno taco. I’m drooling"
  },
  {
    "id": 44,
    "title": "Air Fryer Chicken Tacos",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/08/air-fryer-chicken-tacos-5621w.jpg",
    "category": "Food",
    "description": "Taco Tuesdays forever, amiright? Especially crispy air fryer tacos! Stuffed corn tortillas with juicy chicken and cheese, crisped up in the air fryer for the ultimate in crunch."
  },
  {
    "id": 45,
    "title": "TikTok Hot Chocolate Bombs",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/hot-chocolate-bombs-9096w-2048x1366.webp",
    "category": "Food",
    "description": "Hot chocolate bombs or hot cocoa bombs are cute lil balls of chocolate that you put into a mug. When you pour hot milk into the mug, the chocolate melts and magically releases the marshmallows and cocoa hiding inside."
  },
  {
    "id": 46,
    "title": "Cilantro Lime Rice",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/cilantro-lime-rice-4772w-2048x1366.webp",
    "category": "food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  
  {
    "id": 58,
    "title": "A Breakdown of the Full English Breakfast",
    "Image": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2-1536x1025.webp",
    "category": "mix",
    "description": "Bacon, sausages, eggs, tomatoes, mushrooms, toast, and beans all on one plate: is a Full English breakfast the most ultimate breakfast ever?"
  },
  
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details