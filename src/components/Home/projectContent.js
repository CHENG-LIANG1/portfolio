import React from "react";
import YoutubeEmbed from "../util/YouTubeEmbed";
import libUrl from "./images/图书馆构造.png";
import psUrl from "./images/ps.jpg";
import prUrl from "./images/pr.jpg";
import aeUrl from "./images/ae.jpg";
import aiUrl from "./images/ai.jpg";
import c4dUrl from "./images/c4d.jpg";
import scpUrl from './images/scp.jpg'
import libPersona1 from "./images/图书馆pesona1.png";
import libPersona2 from "./images/图书馆pesona2.png";
import libMindMap from "./images/思维框架图.png";
import libSb1 from "./images/图书馆故事版1.png";
import libSb2 from "./images/图书馆故事版2.png";
import libSb3 from "./images/图书馆故事版3.png";
import libSb4 from "./images/图书馆故事版4.png";
import libSb5 from "./images/图书馆故事板5.png";
import libSp1 from "./images/分镜安排.png";
import libSp2 from "./images/分镜安排2.png";
import libElem1 from "./images/图书馆视觉元素1.png";
import libElem2 from "./images/图书馆视觉元素2.png";
import libElem3 from "./images/图书馆视觉元素3.png";
import libElem4 from "./images/图书馆视觉元素4.png";
import animalChar from "./images/动物角色插图.png";
import moodBoard from "./images/情绪板.png";
import animalSb1 from "./images/故事板1.png";
import animalSb2 from "./images/故事板2.png";
import animalPro1 from "./images/制作过程1.png";
import animalPro2 from "./images/制作过程2.png";
import animalFrame from "./images/样式帧图.png";
import animalTrigger1 from "./images/Trigger Image1.png";
import animalTrigger2 from "./images/Trigger Image2.png";
import libFont1 from './images/libFont1.jpg';
import libFont2 from './images/libFont2.jpg';
import app3d1 from './images/手机制作工艺.png';
import app3d2 from './images/小青制作工艺.png';
import appFrame1 from './images/字幕帧1.png';
import appFrame2 from './images/字幕帧2.png';
import appBg1 from './images/环绕图.png';
import appBg2 from './images/信息图.png';

export const libContent =  <div className={'text-container'}>
  <div className={'divider'}></div>
  <div className={'project-subtitle'}>Motion Graphic Design/Title Sequence Design/Creative Photography</div>
  <div className={'title-container'}>
    <div className={'project-title'}>MATHESON LIBRARY: Social Media Explainer Motion Graphic</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}> Project Duration</div>
      <div className={'project-text'}> 3 Months </div>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-paragraph'}>Introduction of a promotional film meticulously crafted to highlight the Monash Library. This project is strategically tailored for a targeted social media campaign for the vibrant younger student demographic. It marries the art of short-form video filming techniques with the allure of motion graphics to deliver a captivating presentation, ultimately shining a spotlight on the Matheson Library and reinforcing the distinctive brand image of Monash University.</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}> Clients </div>
      <div className={'project-text'}> Monash University Masters Studio</div>
      <div className={'project-text'}> Monash Library Team </div>
    </div>
  </div>

  <YoutubeEmbed embedId="OMKHqmmEHjk" />

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Task</div>
      Monash University, a renowned institution with six branches and a rich history, seeks to connect with its youthful student demographic. The goal is to craft a motion graphic video that embodies Monash's brand identity and resonates with young, energetic students.
      <br/><br/>Objectives:<br/><br/>
      - Create a motion graphic video that embodies Monash University's brand identity.<br/>
      - Design engaging and informative elements that appeal to the youthful target audience.<br/>
      - Visually showcase one of Monash University's four branches (each group selects one).<br/>
      - Elevate the viewer's experience through motion graphic elements.<br/>
      - Collaborate with the library client, establish a design strategy, and meet set goals and deadlines effectively throughout the design process.
      <br/>
    </div>
  </div>

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Challenges</div>
      The primary challenge in this project was aligning the graphic animation's style with Monash University's established brand image. The issue stemmed from the fact that Monash's design specifications manual primarily focused on web design, offering limited guidance for video. The typeface was for web hierarchy, and the colour references used RGB codes mode. Therefore, it's essential to have direct communication with the client to establish a flexible colour palette (lightness, gradients, purity) and adaptable font hierarchies.
      <br/> <br/>Filming posed additional challenges, particularly when capturing specific areas within the Matheson Library. Some spaces were open to the public but required booking and filming permissions, making subplot creation and storyboarding more complex. This often-entailed multiple rounds of filming. Privacy concerns also arose when filming characters.
      <br/> <br/>Lastly, conducting outdoor audio recordings was complicated due to susceptibility to ambient noise.
    </div>
  </div>

  <div className={'heading'}>Tools</div>
  <div className={'software-container'}>
    <img src={psUrl}></img>
    <img src={prUrl}></img>
    <img src={aeUrl}></img>
    <img src={scpUrl}></img>
  </div>

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Role</div>
      <strong>Jiurui Peng:</strong>  Motion Graphic Design/Photography/Visual Asset Design/ADR <br/><br/>
      <strong>Yanyu Gao:</strong>  Screenplay/Editing<br/><br/>
      <strong>Xia Xia:</strong>  Research/Photography<br/><br/>
    </div>
  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Contextual Review：Sir Louis Matheson Library</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The Sir Louis Matheson Library, situated at 40 Exhibition Walk on the Monash Clayton campus, is one of Monash University's branch libraries. In 2017, the library underwent a significant redesign by COX Architecture.
      <br/> <br/>
      This library boasts an extensive collection of books, journals, and media materials. Beyond its role in providing specialized study and research support, it houses a unique assortment of rare books and original recordings, along with artifacts from indigenous cultures. The library is accessible to both members of the Monash University community and the general public.
      <br/> <br/>
    </div>
  </div>

  <img src={libUrl} className={'project-img'} />


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Target Experience Analysis</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      1. Who's Our Audience? We want to inform a diverse audience, including Freshman Students, those preparing to join Monash, Student Volunteers during O-Week, Faculty Alumni, and the general public in Melbourne.
      <br/> <br />
      2. Video's Vision: Our video aims to educate viewers about Matheson Library's features and highlight Monash University's commitment to developing library learning spaces as part of campus life, promoting the university's diversity.
      <br/> <br />
      3. Where to Start: We'll begin by choosing a unique aspect of Matheson Library and a photography theme for creative, short narratives.
      <br/> <br />
      4. How We'll Do It: We'll set production milestones, select filming equipment, write a script, plan shots, and create storyboards. We'll also draw inspiration from creative video examples.
      <br/> <br />
      5. Why We're Creating It: We've opted for this innovative video format to showcase Matheson Library's uniqueness and give viewers a fresh perspective.
      <br/> <br />
      6. When We'll Launch: We'll launch it after refining the project with customer feedback. Possible launch times include during O-Week and via streaming media platforms.
    </div>
  </div>

  <div className={'horizontal-img-container'}>
    <img src={libPersona1} />
    <img src={libPersona2} />
  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Concept Development</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      Given Matheson Library's unique and differentiated facilities, our video presentation should expand beyond its traditional roles of renting and researching. It should prominently feature the library's distinctive exhibition content, showcasing the extra effort invested by Monash University in building this resource.
      The SPECIAL COLLECTION, GALLERY, LISTENING ROOM, and KULATA TJUTA areas house a vast array of artifacts from around the world. Consequently, we can envision Sir Louis Matheson Library as a diverse hub of learning, extending beyond the realms of study and research.
      <br/> <br/>
      In the screenplay, it's crucial to strategize how to incorporate these settings and effectively convey the user experience.
    </div>
  </div>

  <img src={libMindMap} className={'project-img'} />

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Screenplay Development</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The story follows our protagonist engrossed in reading a book within the study room, symbolizing Sir Louis Matheson Library. As the character delves deeper into the text, they are brought into the library through the transition effect.
      <br/> <br/>
      Inside the library, the character encounters a fellow student, they together explore the Multimedia and Asian Collections area on the same floor. Spotting a card, they go to the gallery and read Sir John Monash's inscribed note, accompanied by their classmate.
      <br/> <br/>
      The next scene is the music room, the protagonist plays a CD and enjoys the melodies. They then visit the Special Collections section, carefully browse the rare books.
      <br/> <br/>
      The journey concludes as the character joins classmates in the study room, sharing their design experiences. The scene gracefully ascends towards the sky, marking the end of this enchanting tale.
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Storyboard</div>
  </div>

    <div className={'horizontal-img-container'}>
      <img src={libSb1} />
      <img src={libSb2} />
    </div>

    <div className={'horizontal-img-container'}>
      <img src={libSb3} />
      <img src={libSb4} />
    </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Screenplay Management</div>
  </div>

  <div className={'horizontal-img-container'}>
    <img src={libSp1} />
    <img src={libSp2} />
  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Motion Graphic Assets</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      There are four types of visual assets: kinetic typography, lower-third illustration, path trim animation, and 3D camera tracking. These designs constitute the core creative content of our video, as outlined in the storyboard introduction. They serve to introduce various interior scenes and guide the visual narrative.
      <br/> <br/>
      Production Process: Kinetic Typography, Path Trim, and Tracking Animations: These were created in Adobe After Effects (AE) and involved some filming with our team members.
      <br/> <br/>
      Lower-Third Illustration: To maintain consistency in typeface, we electronically crafted lower-third illustrations in Photoshop. The style of these illustrations echoes the vintage illustrations found within the interior pages of the SPECIAL COLLECTION. This design choice not only reflects the gallery's history but also alludes to the extensive collection of rare and antiquated books within the library.
    </div>
  </div>
  <div className={'horizontal-img-container'}>
    <img src={libElem1} />
    <img src={libElem2} />
  </div>

  <div className={'horizontal-img-container'}>
    <img src={libElem3} />
    <img src={libElem4} />
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Font/Colour Specification: Client Communication</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      As previously mentioned, we encountered challenges with colour specifications during the early stages of the project. The initially proposed Aqua colour scheme, featured in the DEMO version, was rejected so we contacted our tutor and the library team a third time to ensure a precise range for the use of colours.
      <br/> <br/>
      Ultimately, we decided on Monash's classic black and white as our primary colour scheme, with Ruby Pink as a complementary secondary colour for the Matheson Library branch. (Accept brightness change).
      <br/> <br/>
      We opted for the Roboto regular typeface, deviating from the condensed style outlined in the Monash Design Manual （This deviation was approved after seeking permission.）
    </div>
  </div>

  <img src={libFont1} className={'project-img'} />
  <img src={libFont2} className={'project-img'} />

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Peer Feedback</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <i>
        “Great job! The documentation is well-designed, and the final resolved outcome is great to watch. To enhance it further, consider synchronising the sound and voice-over with certain clips, and improving the smoothness and thinness of lines paying more attention details in motion effects like the outline character.”
      </i>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Reflection</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      Our project represented an intriguing blend of photography and graphic animation, pushing the boundaries of creativity. We encountered several challenges, particularly in our choice of colours and fonts. This stemmed from the necessity to align with the client brief, ensuring alignment with the MONASH brand guidelines (the web design guidelines couldn't directly apply to the video production.
      <br/> <br/>
      To overcome these challenges, we are engaged in extensive communication with both library teams and mentors. This collaborative effort allowed us to recreate the font hierarchy tailored for the video and fine-tune the Title Sequence colour palette, ensuring it remained consistent with the MONASH brand.
      <br/> <br/>
      Moreover, our filming environment posed limitations on our ADR voiceover. In hindsight, we acknowledge that further adjustments in post-production, such as Recording Studio recording, could have enhanced audio fidelity. This learning experience underscores the importance of meticulous post-production refinement to elevate the overall project quality.
    </div>
  </div>
</div>

export const animalContent = <div className={'text-container'}>
  <div className={'divider'}></div>
  <div className={'project-subtitle'}>Motion Graphic Design/Character Design/Visual Storytelling/Augment Reality</div>
  <div className={'title-container'}>
    <div className={'project-title'}>Endangered Species Call To Action Motion Graphic</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}>Project Duration</div>
      <div className={'project-text'}>1.5 Months </div>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-paragraph'}>This project involved the creation of an educational graphic animation focused on the Tasmanian Devil, a species listed as endangered on the Zoos Victoria Endangered Animals List. The primary objective of the motion graphics is to illustrate the imminent existential threat confronting the Tasmanian Devil and to raise awareness about the importance of cautious driving during the night. Furthermore, the motion graphics serve as an appeal for donations to support the zoo's not-for-profit care program.</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}> Clients </div>
      <div className={'project-text'}>Monash University Masters Studio</div>
      <div className={'project-text'}>Zoos Victoria</div>
    </div>
  </div>

  <YoutubeEmbed embedId="myHCjnNnKnc" />

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Task</div>
      - Design a character based on the selected animal, considering the style and aesthetics that effectively convey the animal's essence.
      <br/> <br/>
      - Develop a character sheet with drawings of your character in at least three different poses to guide the animation.
      <br/> <br/>
      - Explain and plan the use of at least three principles of animation that will be incorporated into your animation.
      <br/> <br/>
      - Implement simple AR using EyeJack to enhance your story, possibly reinforcing the call to action.
      <br/> <br/>
      - Design a poster or image that utilizes AR with your animated character to reinforce the call to action.
      <br/> <br/>
      - Include a compelling statistic or critical information about the chosen animal that generates empathy and a clear call to action, such as directing viewers to a website or encouraging donations.
      <br/>
    </div>
  </div>

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Challenges</div>
      The primary challenge during this project was the rigging manipulation of the animal movement. This demanded meticulous reference to the real-world motion patterns of a Tasmanian Devil or a similar reptilian species. The intricate aspect was harmonizing these authentic animal movements with the environmental graphics. Notably, both components, the animal's motion and the environment should be separately illustrated while adhering to a unified stylistic consistency (For AR purposes). This delicate balancing act was essential for creating a visually compelling narrative.
    </div>
  </div>

  <div className={'heading'}>Tools</div>
  <div className={'software-container'}>
    <img src={psUrl}></img>
    <img src={aeUrl}></img>
    <img src={aiUrl}></img>
  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Contextual Research</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The survival of Tasmanian Devils is seriously threatened by Devil Facial Tumour Disease which develops rapidly and is fatal. <br />
      Once the highly infectious cancerous tumours appear around the mouth, face and neck, the Devils generally die within three to six months. <br />
      The other threat is cars (and their drivers) killing them on the roads. <br />
      <br /> <br />
      Zoos Victoria, through Healesville Sanctuary, is a partner of the Save the Tasmanian Devil program. It aims to breed and manage up to 50 Devils as part of the long-term insurance program. In 2013, 2015 and 2017, Tasmanian Devils were released from Healesville to locations free of the tumour disease on Maria Island and the Tasman Peninsula. Zoos Victoria also assists with monitoring animals and conducting research in the wild, in the lab and in the captive program.
      <br /> <br />
      Source credit to:https://www.zoo.org.au/fighting-extinction/local-threatened-species/tasmanian-devil/ <br />
    </div>
  </div>



  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Character Motion Graphic Design</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The animal character design for the Tasmanian Devil adopts a vector-based cartoon drawing style. The character's actions include crawling, running, and resting, which were meticulously illustrated as separate entities, each aligned with the predefined scenes in the storyboard. These scenes encompassed various aspects of the Tasmanian Devil's life, such as predation, facial expressions, and its habitat.
      <br /> <br />
      For perspective considerations, I experimented with turning the character's head, thus creating diverse perspectives for the depicted actions. This approach aimed to enhance the visual appeal and storytelling capacity of the animal throughout the animation.
    </div>
  </div>

  <img src={animalChar} className={'project-img'} />


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Mood boards: Parallax Composition</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The mood board primarily serves as a reference point for composition, a crucial element in our animated project, given the substantial interaction between the characters and their environment. During the mood board creation, we drew inspiration from several frames featuring a paper cutout style and a captivating parallax effect. This aesthetic direction significantly influenced our animation approach.
      <br /> <br />
      Ultimately, we adopted a method where each animal character is treated as a distinct foreground element while the background serves as the backdrop. We carefully calibrated the camera's depth of field and relative motion to achieve the desired visual effect. Furthermore, we drew insights from various material references to inform the overall design and atmosphere of the animation.
      <br /> <br />
    </div>
  </div>

  <img src={moodBoard} className={'project-img'} />


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Storyboard</div>
  </div>

  <div className={'horizontal-img-container'}>
    <img src={animalSb1} />
    <img src={animalSb2} />
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Animation Principles</div>
  </div>

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      Secondary Animation: Tasmanian Devil's walking/running animation applies secondary movements of the body. When its inward-facing front leg is raised, another outward-facing leg will also lift. On top of this, the head will be shaking with the tail cocking and drooping. Similar use of this role has applied to another character's head-up animation. When the Tasmanian Devil's head is up, the eyes also move up. This provides a real focus and the direction of vision.
      <br /> <br />
      Anticipation: The head-up action is an anticipation action for shot switching. When the Tasmanian Devil looks at the sky, the camera is gradually pulled upward. The sky over the forest becomes the background of the next shot.
      <br /> <br />
      Arc: The magnifying glass animation uses a spiral arc motion path, which makes the Tasmanian Devil's gradient appearance animation more dynamic.
      <br /> <br />
    </div>
  </div>



  <div className={'horizontal-img-container'}>
    <img src={animalPro1} />
    <img src={animalPro2} />
  </div>


  <img src={animalFrame} className={'project-img'} />

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>AR Interaction</div>
  </div>
  <div className={'horizontal-img-container vertical'}>

    <img style={{cursor: 'pointer'}} src={animalTrigger1} onClick={() => {
      window.open('https://launch.eyejackapp.com/Artwork-f9b20b99-632e-4ae4-b940-3ddc84202c75', "_blank")
    }}/>

    <img style={{cursor: 'pointer'}} src={animalTrigger2} onClick={() => {
      window.open('https://launch.eyejackapp.com/Artwork-bb3d911b-2d2d-4e2c-99dd-d257e1db7b60', "_blank")
    }}/>


  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Feedback from Van (Tutor)</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <i>
        “What is really strong in this submission is the use of motion so you've got really nice use of motion and transitions and cameras and movements so you know in the shadows as well. Yeah, just the transition the movement into the section about the Facial Tumor diseases and then you know that transition into the car is really strong and then into the sort of circle holding it. I think there's lots of really interesting ideas around motion and animation here that work really well. What's probably less strong is the design. So the devil character looks very different in the different shots. You know, the sort of simple versions of it at the start, and at the end, then, when it's endangered, you know, it's got the detail of its mouth. Then, yeah, there's sort of a start. It looks like a teddy bear. You've got a lot of different styles too. You've got the globe with Australia, then you've got sort of a really simple map and the simple pause, then the 3d trees, then the Facial Tumor section is very detailed. You know, then the kind of the leaves at the end sort of a different style again, with a drop shadow. So I really think just the visual design is where you need to concentrate your efforts and really start to take what's you know, clearly a good eye for motion graphics and for design generally and just apply that to the designs that you're creating and animating. Um, so yeah, that's probably the section where it's a little bit less strong. what I was saying was that I think, with the subtitles you should just use a simpler sans serif font rather than that kind of hand drawn font, which is generally sort of makes things look a little bit more childlike or a little less sophisticated. So yeah, I think there's really lots of strong elements here and you've created strong work throughout the semester. But there's also room in this submission for improvement. So I look forward to seeing what you do in subsequent semesters.”      </i>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Reflection</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      This project presented a distinctive challenge centred around animal character rigging, setting it apart from the conventional character binding scenarios, I had to meticulously consider the number of animation cycles and the starting points of these actions during the design phase.
      <br /> <br />
      Effective feedback proved invaluable in shaping my project's evolution. Notably, I encountered aesthetic challenges stemming from the constraints of our production cycle. The final sequence has discernible differences in the level of facial detail among the animal characters in close-up and angled shots. Moreover, while my scenes incorporated camera animations and textures, our choice of 2D binding meant that the animal assets lacked the textures necessary for a cohesive visual experience. This discordance highlighted the need for enhanced emphasis on aesthetic consistency in our future design endeavors.    </div>
  </div>
</div>

export const appContent = <div className={'text-container'}>
  <div className={'divider'}></div>
  <div className={'project-subtitle'}>Motion Graphic Design/Graphic Design/Visual Interaction</div>
  <div className={'title-container'}>
    <div className={'project-title'}>iQingbaijiang 2023: A motion graphic for the application update</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}>Project Duration</div>
      <div className={'project-text'}>1 Month</div>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-paragraph'}>iQingbaijiang 2023 is an official software developed by the Fushion Media Development Centre, seamlessly integrating a wide array of local convenience services and news information. Our project centred around the creation of a Motion Graphic to introduce the new features of the 2023 version of the app.</div>
    <div className={'right-panel'}>
      <div className={'project-bold-text'}> Clients </div>
      <div className={'project-text'}>Monash University Masters Studio</div>
    </div>
  </div>
  <YoutubeEmbed embedId="lccGGDgMVS8" />

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Task</div>
      - Showcase the new interactive interface of iQingbaijiang.      <br/> <br/>
      - Highlight the application scenarios of iQingbaijiang's new functions.      <br/> <br/>
      - Visualize the information content functions.      <br/> <br/>
      - Ensure color tone alignment with the app's brand image.      <br/> <br/>
      - Pay close attention to achieving harmony between music, voice-over, and graphics.      <br/> <br/>
      <br/>
    </div>
  </div>

  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Challenges</div>
      One of the primary challenges we faced was the tight development cycle of the project. During the design phase of the Motion Graphic, the final product interface of the app had not yet been released. Consequently, we had to create separate graphic content to simulate the "to-be-released" interface of the app. This required meticulous attention to detail and a forward-thinking approach to ensure seamless integration with the final product.
      <br/> <br/>
      Moreover, Client A provided us with a two-minute-long voice-over content. To keep the audience constantly engaged, we should avoid content repetition or interruptions while introducing the interface and functions. In addition, we should align our visual element properly with the VO content. This intricate balance allowed us to effectively convey the app's new features while ensuring a smooth and cohesive viewing experience.    </div>
  </div>

  <div className={'heading'}>Tools</div>
  <div className={'software-container'}>
    <img src={psUrl}></img>
    <img src={aeUrl}></img>
    <img src={aiUrl}></img>
  </div>


  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      <div className={'heading'}>Role</div>
      <strong>DM Chen:</strong> Copywriter <br/><br/>
      <strong>Jiurui Peng:</strong> Vector Illustration/Motion Graphic Design <br/><br/>
      <strong>C Zhuang:</strong> Voice Over<br/><br/>
    </div>
  </div>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Motion Graphic Technique Design: Persudo-3D</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      As part of our brand identity strategy, I took the initiative to create a simplified character illustration for the app, known as "Xiaoqing."
      <br/><br/>
      This character was seamlessly integrated into both the Lower Third subtitle and main heading, effectively enhancing the overall visual appeal.<br/><br/>
      To further increase user engagement, we employed a simplified character rigging animation. This animation added a dynamic dimension to the on-screen information and fostered a sense of interaction within the content.
      <br/><br/>
    </div>
  </div>

  <img src={app3d1} className={'project-img'}/>

  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Character Motion Graphic Design</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      As part of our brand identity strategy, I took the initiative to create a simplified character illustration for the app, known as "Xiaoqing."
      <br />       <br />
      This character was seamlessly integrated into both the Lower Third subtitle and main heading, effectively enhancing the overall visual appeal.
      To further increase user engagement, we employed a simplified character rigging animation. This animation added a dynamic dimension to the on-screen information and fostered a sense of interaction within the content.
      <br />
    </div>
  </div>

  <img src={app3d2} className={'project-img'} />

  <div className={'horizontal-img-container'}>
    <img src={appFrame1} />
    <img src={appFrame2} />
  </div>
  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Data Visualization/Infographics</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      Use graphical animations in the introductory tab and progress screens to simplify textual infographics      <br /> <br />
    </div>
  </div>

  <div className={'horizontal-img-container'}>
    <img src={appBg1} />
    <img src={appBg2} />
  </div>


  <div className={'title-container'}>
    <div className={'project-title smaller-title'}>Reflection</div>
  </div>
  <div className={'paragraph-container'}>
    <div className={'project-paragraph'}>
      The project presented a short-term Motion Graphic (MG) challenge, placing a premium on an effective production strategy. To meet the project's demands, I embarked on a journey of experimentation, particularly focusing on vector illustration MG techniques. These techniques encompassed the application of visualizations, character integration, and the incorporation of pseudo-3D elements, all aimed at expediting the rendering of key visuals.
      <br />       <br />
      However, it's worth noting that the extended duration of the animation, spanning 2 minutes, resulted in varying levels of production precision across different segments. This divergence in quality was primarily attributed to the demanding schedule. It underscores the need for refinements in the subsequent phases of animation design to ensure a consistently high level of quality throughout the entire project.
    </div>
  </div>
</div>