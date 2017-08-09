function clickone(box){
var y=(".jobList"+box.id);
		var x = $(y);
        x.toggle(1000);

}


function clickInfo(box){
var data={"info":[
        {
            "title":"SENIOR DESIGNER",
            "responsibilities":"<ul><li>Act as lead designer for retainer and project-based clients.</li><li>Make intelligent design decisions that are grounded in reason, and be able to defend your choices.</li><li>Execute multiple projects at once while meeting scheduled deadlines.</li><li>Work collaboratively across multi-faceted teams of Creatives, Motion Designers, UX designers, Developers, etc.</li><li>Effectively delegate work to additional designers on accounts when necessary.</li><li> Mentor a group of mid and junior level designers by being a support system and scheduling regular weekly check-ins.</li><li>Act as an advocate for the design team across departments.</li></ul>",
            "qual":"<ul><li> At least 5-7 years of relevant work experience </li><li> Exceptional design aesthetic and typography skills. </li><li>Expert knowledge of design software of choice (Adobe CC, Sketch, etc). </li><li>Ability to design with pixels and vectors.</li><li> Knowledge of CSS and HTML capabilities and limitations.</li><li>Incredibly detail oriented.</li><li>Extremely deft at prioritization and time management</li></ul>"
        },
        {
             "title":"DESIGNER",
            "responsibilities":"<ul><li>Work with Creative Directors, Art Directors and Copywriter teams to produce an array of design content for use by clients across digital platforms including but not limited to digital experiences, social media and display media.</li><li>Work will include photo manipulation, custom illustration, typography, lettering and web layout.  </li><li>Follow creative direction and art direction responsibly and effectively.</li><li>Work in a group dynamic, and actively participate on any given project or team to which assigned.</li><li>Uphold graphic aesthetic and integrity of original design while producing a high volume of new assets.</li><li>Execute multiple projects at once while meeting scheduled deadlines.</li></ul>",
            "qual":"<ul><li>3-5 years of design experience, preferably some within an agency atmosphere.</li><li>Highly proficient in all of Adobe Creative Suite.</li><li>Ability to design with pixels and vectors.</li><li>Skill with Keynote, and Powerpoint is greatly appreciated.</li><li>Skill with motion (After Effects) and 3D (Cinema 4D) is a plus.</li><li>Ability to draw traditionally for the purpose of storyboards is a plus.</li><li>Knowledge of CSS and HTML.</li><li>Ability to work ‘Pixel Perfect’ with serious attention to detail.</li></ul>"
        },
		        {
             "title":"ASSOCIATE CREATIVE DIRECTOR (ART)",
            "responsibilities":"<ul><li>You must be able to lead your team and thrive under the pressure cooker of independence.</li><li>Work will include photo manipulation, custom illustration, typography, lettering and web layout.  </li><li>Follow creative direction and art direction responsibly and effectively.</li><li>Someone not dictated by medium, and understands what it means to formulate a big idea, then develop all the tactics that fill out the narrative underneath it. </li><li>He/She has a varied background in art direction with a strategic backbone to match. You name it, they’ve worked on it. </li><li>Execute multiple projects at once while meeting scheduled deadlines.</li></ul>",
            "qual":"<ul><li>6-8 years agency experience as a creative.</li><li>A background in Art Direction with design skills.</li><li>Strong knowledge of digital production.</li><li>Extensive experience with photo and video shoots.</li><li>Mastery of Photoshop and Illustrator.</li><li>Willing and able to craft a deck in Powerpoint or Keynote.</li><li>Can wield the written word to sell an idea.</li><li>Strong presentation skills.</li><li>Can create big ideas and the tactics that accompany them.</li><li>Pragmatic but inspired.</li></ul>"
        },
		{
             "title":"COPYWRITER",
            "responsibilities":"<ul><li>Creative concepts</li><li>Strategic understanding</li><li>Digital expertise</li><li>Production quality</li><li>Presentation building</li><li>Team spirit</li></ul>",
            "qual":"<ul><li>2-4 years agency experience as a Copywriter</li><li>Experienced in various formats and styles</li><li>Strong knowledge in digital production</li><li>Able to craft a deck in Keynote or Powerpoint</li><li>Has an eye for good Art Direction</li><li>Can create big ideas as well as clever tactics</li><li>Sees feedback as an opportunity to optimize</li><li>Is curious, confident and inspired</li></ul>"
        },
		{
             "title":"DIRECTOR OF STRATEGY",
            "responsibilities":"<ul><li>Manage & mentor the strategy department across all levels. The team will look to you for guidance, leadership, and ultimately as a role model in the industry.Understand the teams’ resourcing needs, and work with executive leadership, HR, and Operations to staff appropriately.</li><li>Maintain a secure, stable, and trusting relationship with our current clients.</li><li>Ensure all campaigns stay on course, meet goals, and course-correct when needed.</li><li>Set the bar high for creative output, challenging the mold when needed.</li><li>Delegating work to the Associate Director & Senior Strategists as needed per project, and across the department as a while.</li><li>Lead the development and execution of the ideation process.</li></ul>",
            "qual":"<ul><li>7-10 years of experience in the creative agency space driving brand experiences, particularly in the digital market.</li><li>A proven career history in a senior-level strategic role leading a department of strategists within a similar, forward thinking digital agency.</li><li>Oversee Carrot’s brand and distribution strategy and execute across the agency.</li><li>Facilitate roadblocks and empower teams to make collaborative and insightful decisions.</li><li>Proven ability to work cross functionally in a fast paced environment.</li><li>A passion for building top notch brand experiences in the digital landscape</li><li>Constantly looking to improve yourself, and your team, to ultimately put forth the best work possible.</li><li>Demonstrated history of both communicating and executing strategic digital initiatives.</li><li>Strong understanding of brands across verticals and industries, with the ability to provide strategic and analytical insights into any type of client.</li></ul>"
        },
		{
		  "title":"SENIOR STRATEGIST",
            "responsibilities":"Be a leader when it comes to presenting strategy, ideas & concepts to both internal & external teams. The right candidate will have a glowing track record of creating social, digital & brand strategies that make the work genuinely better and more effective. If you can look at the same thing that everyone else has looked at, but see something that nobody else has seen, then we need to talk",
            "qual":"<ul><li>5-7 years experience in strategy, consulting, account planning or brand planning.</li><li>3+ years focus on digital or social campaigns.</li><li>True Insight. Has the ability to empathize with different consumer types, see the world through their eyes and connect those dots to the brand.</li><li>Experience managing & motivating junior strategists </li><li>Ability to come up with BIG ideas that move the creative forward.</li><li>Experience writing killer creative briefs. Someone who believes in the value of a good creative brief and doesn’t just regurgitate what the client has given them.</li></ul>"
        },
		{
		  "title":"MANAGER, BUSINESS OPERATIONS",
            "responsibilities":"<ul><li>Owning (build, run, and improve) the operational systems, processes and policies that drive information flow across the company with a focus on profitability, efficiency, and quality.</li><li>Design the project budget workflow, roles and responsibilities, and systems</li><li>Determine target margins / rates and approval process. Holding various team members accountable to their part of the process.</li><li>Analyze project, client, and department profitability.</li><li>Clearly communicate profitability metrics to CFO, Client Services, Operations and other stakeholders in way that will facilitate strategic analysis and operational tactics.</li></ul>",
            "qual":"<ul><li>6+ years experience in a business analysis, operations and/or finance role.</li><li>Advertising/digital agency experience a plus. Professional services experience, or consultative experience also considered.</li><li>Understanding of digital production budgets and workflow a strong plus.</li><li>Experience analyzing financial metrics a plus.</li><li>Proof of rolling out a system or process</li></ul>"
        },
		{
		  "title":"FREELANCE JUNIOR VIDEO EDITOR",
            "responsibilities":"<ul><li>You are responsible for editing a variety of internal projects, branded content, scripted video productions, and creative video projects across a dynamic range of types and industries. You will be assigned multiple projects every week, with strict deadlines, and expected to self-schedule time in the office to complete projects in a timely manner.</li><li>You will be expected to possess a technical understanding of video formats, popular codecs and various delivery specifications for a wide range of social media and web platforms. Additionally, experience with broadcast delivery, and managing and quality-checking multiple outputs for projects is a plus.</li></ul>",
            "qual":"<ul><li>Strong understanding of Adobe Creative Suite, especially Adobe Premiere and Photoshop.</li><li>Prior experience working as a freelance video editor, or casual video editing experience.</li><li>Ideally you have shot personal / home videos, or worked as a freelance videographer.</li><li>Familiarity with video compression, encoding and media specs for web and broadcast platforms</li><li>The ability to handle multiple projects simultaneously and dozens of projects per month.</li><li>Basic file management and server administration experience, high volume data organization</li><li>Take quality notes, document work, and translate client directives into a finalized product.</li><li>A key understanding of the client revision process — and working through revisions diligently.</li><li>Quality assurance on all final video outputs for each project</li></ul>"
        }

		
]}
var jsLang=box.id;
var title="";
var responsibilities="";
var qual="";

switch (jsLang) { 
	case 'design1': 
		title=data.info[0].title;
		responsibilities=data.info[0].responsibilities;
		qual=data.info[0].qual;
		break;
	case 'design2': 
		title=data.info[1].title;
		responsibilities=data.info[1].responsibilities;
		qual=data.info[1].qual;
		break;
	case 'creative1': 
		title=data.info[2].title;
		responsibilities=data.info[2].responsibilities;
		qual=data.info[2].qual;
		break;		
	case 'creative2': 
		title=data.info[3].title;
		responsibilities=data.info[3].responsibilities;
		qual=data.info[3].qual;
		break;
	case 'strategy1': 
		title=data.info[4].title;
		responsibilities=data.info[4].responsibilities;
		qual=data.info[4].qual;
		break;
	case 'strategy2': 
		title=data.info[5].title;
		responsibilities=data.info[5].responsibilities;
		qual=data.info[5].qual;
		break;
	case 'operations1': 
		title=data.info[6].title;
		responsibilities=data.info[6].responsibilities;
		qual=data.info[6].qual;
		break;
	case 'content1': 
		title=data.info[7].title;
		responsibilities=data.info[7].responsibilities;
		qual=data.info[7].qual;
		break;

}
$("#jobtitle").text(title);
$("#responsibilities").html(responsibilities);
$("#qual").html(qual);
$(".careerinfo").slideUp(0);
$(".careerinfo").slideDown(1000);
}


function validateemail(emailVar){
		
			var emailRegExp = /^[a-zA-Z0-9_.]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,3}$/;
			if(emailRegExp.test(emailVar))
				{
				return true;
				}
			else
				{
				return false;
				}

	}

function formSubmit(){


}
$(document).ready(function(){

$('#contactForm1').submit(function () {
var emailVar=$("#contactEmail1").val();
 if(validateemail(emailVar)){
alert("Thank you for your interest in Fitfoodie careers!");
$("#contactEmail1").val("");
return true;
}
else{
alert("Please enter a valid email!");
 return false;
}
return false;
});


$('#contactForm2').submit(function () {
var emailVar=$("#contactEmail2").val();
 if(validateemail(emailVar)){
alert("Thank you for your interest in Fitfoodie careers!");
$("#contactEmail2").val("");
return true;
}
else{
alert("Please enter a valid email!");
 return false;
}
return false;
});


$('#contactForm3').submit(function () {
var emailVar=$("#contactEmail3").val();
 if(validateemail(emailVar)){
alert("Thank you for your interest in Fitfoodie careers!");
$("#contactEmail3").val("");
return true;
}
else{
alert("Please enter a valid email!");
 return false;
}
return false;
});

});


/*
$(document).ready(function(){
$('.emailSubmit').click(function(){
if(validateemail()){
alert("Thank you for your interest in Fitfoodie careers!");
$(".contactEmail").val("");
}
});
});
*/

