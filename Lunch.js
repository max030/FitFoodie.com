	
$( document ).ready(function() {
	var imageSrc = "Images/Lunch1.jpg";
	$("#imgselected").css("background-image",'url(' + imageSrc + ')');
	$("#LunchName").text("Vegetarian Baked Potato");
	$("#LunchDescription").text("What a way to enjoy the nutrition and taste of mushroom. this is fantastic meatless dinner!");
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		
		var x=ingredientArray[0];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients
		populateCalories();
		populatePrice();
		

		
	
});



var nameArray =new Array("Vegetarian Baked Potato",
							"Healthy Chicken Salad",
							"Vegetarian Chow Mein",
							"Vegetarian Indian Pilaf",
							"Indian Stir Fried Vegetables",
							"Falafel Wrap");
var descArray=new Array("This recipe is made all the more tasty with the inclusion of kidney beans, tomato, light sour cream, reduced fat tasty cheese & sweet chilli sauce.",
							"This recipe ticks all the boxes.It's delicious, low in fat,low in sodium,low in sugar and high in protien",
							"This is easy & quick after work meal. You can add some chicken breast or beef if you like but sometimes it's good to have a meatless dinner during week.",
							"These vegetables taste great coated in garlic, mustard seeds & turmeric. The turmeric gives the vegetables a great yellow colour.",
							"If you really want to jazz this up add a tiny bit of bacon or chorizo with the onion for a smokey flavour",
							"This Sweet Potato and Spinach BAke recipe makes a tasty lunch and the leftovers are great the next day."
							);

var ingredientArray = [
  ["Potatoes","Kidney Beans","Tomato","Onion","sour cream","100% fat reduced Cheese"],
  ["Chicken","Lettuce","mushroom","multigrain toast"],
  ["onion","capsicum","spinach","Zucchini","ramen noodles","Mushroom"],
  ["onion","sweet potato","capsicum","Peas","tomatoes","Basmati rice"],
  ["Cauliflower","beans","capsicum","Zucchinni"],
  ["Eggs","Milk","Mushroom", "Tomatoes","Spinach","Capsicum","multigrain bread","sweet	potato"] ];

	var ingredients=["udon noodles","mushrooms","capsicum","broccoli","cauliflower","onion","honey","chicken ","red capsicum",
	"spinach ","green beans","Hokkien noodles","evaporative milk","zucchini ","baby corn","peas","tomatoes ","mini tacos","basmati rice","ginger", "chicken stock",  "yoghurt",
	,"fish ","garlic","sweet potato","white potato","Arborio rice","pumpkin diced","yellow capsicum","white wine","parmesan cheese","red capsicum","green beans", "carrot ", 
	"vegetable stock"];

	var ingredientCalories=[
	[192.0,15.0,30.0,15.0,14.0,6.0,20.0],
	[167,9.0,2.5,0.5,0.625,0.125,20.0],
	[11,43,50,2.9,6.0,2.9,3.50],
	[5,20.0,0.03,30,1.50,0.60,2.52,78.0],
	[20,41.0,0.03,20,35,10.93,0],
	[30,12.58,0,0.907,60,0.64,0],
	[17,71,0.1,0.2,3.6,0.2,0.033],
	[28,117,0.625,3.25,2.25,3,0.033],
	[3,12.558,0.175,0.725,0.275,0.025,0],
	[4,16.74,0,1.05,0,1.05,0],
	[20,83.72,0.125,4.25,0.25,2.5,0],
	[13,54.418,0.135,3.156,0.27,1.996,0.001],
	[23,96.278,0.131,5.937,0.295,4.067,0],
	[45,188.38,0.7,8.15,1.45,5.7,0],
	[32,133.9,0.167,6.67,0.501,0,0],
	[2,8.336,0.042,0.332,0,0.166,0.002],
	[23,96.278,0.33,5.61,0.66,1.98,0],
	[104,45.4,2.85,12.3,7.65,11.85,0.081],
	[121,106,6.2,14.95,0.85,13.2,0.011],
	[79,200,0.3,20.25,0.975,10.8,0.001],
	[32,153.95,0,8.57,0.357,7.5,0]
	];
	
	var ingredientPrice=[2.50,0.15,0.15,0.50,0.15,1.00,1.30,0.56,1.00,1.14,0.12,2.89,5.59,0.12,1.50,0.95,4.02,2.89,5.12,2.12,1.56, 2.25, 6.32,4.25,0.02 ,66.5,0.02,0.25	 ];
	
	
	function imageClick(LunchImage){
	var getImageSrc = "Images/Lunch"+LunchImage.id +".jpg";
	$("home page.html#reviews").css("background-image",'url(' + getImageSrc + ')');
	$("#imgselected").css("background-image",'url(' + getImageSrc + ')');
	var LunchName=nameArray[LunchImage.id-1]; //adding Dinner name
	var LunchDesc=descArray[LunchImage.id-1]; //adding description
	$("#LunchName").text(LunchName);
	$("#LunchDescription").text(LunchDesc);
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		removeSpace() ;
		var x=ingredientArray[LunchImage.id-1];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients

				for (k=1; k<=8; k++){
						$('#cal'+k).val(0);
					}
	
		populateCalories();
		populatePrice();
		
}

	function addCheckbox(name) {
   var container = $('#cblist');
   var inputs = container.find('input');
   var id = inputs.length+1;
	
  $('<input />', { type: 'checkbox', id: 'cb'+id, value: name }).appendTo(container);
	$('#cb'+id).prop('checked', true);
  $('<label />', { 'for': 'cb'+id, text: name }).appendTo(container);

	 $("#cblist").append("<li>&nbsp;&nbsp; </li>");
	

	
	//$("#cb"+id).before("&nbsp;&nbsp;");
	//$("#cb"+id).after("&nbsp;");
	 
	}

	function removeCheckbox() {
   $("#cblist input").each(function() {
	(this).remove(); 
	
   });
	}
	function removeLabel() {
   $("#cblist label").each(function() {
	(this).remove();  
   });
	}
	function removeSpace() {
   $("#cblist li").each(function() {
	(this).remove();  
   });
	}


function populateCalories(){
			for (k=1; k<=7; k++){
						$('#cal'+k).val(0);
					}
	$("#cblist input").each(function() {
		for (i=1;i<=ingredients.length;i++){
			
				if($(this).val()==ingredients[i-1])
				{
					var y = ingredientCalories[i-1];
					for (k=1; k<=7; k++){
						var x=$('#cal'+k).val();
						var z=(parseFloat(x)+y[k-1]).toFixed(3);
						$('#cal'+k).val(z);
					}
						
				}
				
		}
	
	});

}

function populatePrice(){
$('#price').val(0);
$("#cblist input").each(function() {
		for (i=1;i<=ingredients.length;i++){
			
				if($(this).val()==ingredients[i-1])
				{
					var price = ingredientPrice[i-1];
					var oldPrice=$('#price').val();
					var newPrice=(parseFloat(oldPrice)+price).toFixed(3);
					$('#price').val(newPrice);
						
				}
				
		}
	
	});

}

	
$(document).on('change', ':checkbox', function()  {
        if($(this).is(":checked")) {
			for (i=1;i<=ingredients.length;i++){
			
				if($(this).val()==ingredients[i-1])
				{
					var y = ingredientCalories[i-1];
					var price = ingredientPrice[i-1];
					for (k=1; k<=7; k++){
						var x=$('#cal'+k).val();
						var z=(parseFloat(x)+y[k-1]).toFixed(3);
						$('#cal'+k).val(z);
					}
					var oldPrice=$('#price').val();
					var newPrice=(parseFloat(oldPrice)+price).toFixed(3);
					$('#price').val(newPrice);
						
				}
				
				
			}
		}
		else {
				for (i=1;i<=ingredients.length;i++){
					if($(this).val()==ingredients[i-1])
					{
						var y = ingredientCalories[i-1];
						for (k=1; k<=7; k++){
							var x=$('#cal'+k).val();
							var z=(parseFloat(x)-y[k-1]).toFixed(3);
							$('#cal'+k).val(z);
						}
						var price = ingredientPrice[i-1];
						var oldPrice=$('#price').val();
						var newPrice=(parseFloat(oldPrice)-price).toFixed(3);
						$('#price').val(newPrice);	
					}
				
				}
			}



		



	});


	



