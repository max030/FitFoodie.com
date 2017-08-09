	
$( document ).ready(function() {
	var imageSrc = "Images/dessert1.jpg";
	$("#imgselected").css("background-image",'url(' + imageSrc + ')');
	$("#dessertName").text("Gluten Free Raspberry & Walnut Muffins");
	$("#dessertDescription").text("If you like raspberries you will love these muffins. They have a great crunchy texture from the walnuts and a bit of tartness from the raspberries.");
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		
		var x=ingredientArray[0];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients
		populateCalories();
		populatePrice();
		

	
});

	var nameArray =new Array("Gluten Free Raspberry & Walnut Muffins",
							"Chocolate Pancakes & Summer Berries",
							"Berry Tiramisu",
							"Berry Yoghurt Delight",
							"Dairy Free Banana & Mango Ice Cream");
	var descArray=new Array("If you like raspberries you will love these muffins. They have a great crunchy texture from the walnuts and a bit of tartness from the raspberries.",
							"These pancakes are delicious on their own, or could be served with poached fruit or berries as suggested in this recipe.",
							"We've called this Berry Tiramisu because it has a similar texture to traditional tiramisu. Instead of having a coffee flavour, this has a custard & fresh berry flavour.",
							"This Berry Delight recipe shows how easy it is to create a healthy and exciting dessert by combining foods that are often eaten on their own.",
							"This is a delicious dessert made purely from frozen fruit that has a texture somewhere between ice cream and sorbet."
							
							);

	var ingredientArray = [
  ["Almonds","Walnuts","Brown sugar","Gluten free baking powder","Apple","Fresh raspberries","Eggs"],
  ["Eggs","Low fat milk","Cocoa powder","Sugar","Mixed berries"],
  ["Strawberries","Blueberries","Low fat custard","Sponge fingers","Milk chocolate","Frozen raspberries"],
  ["Raspberry Yoghurt","Cherry Ripe Bar","Strawberries"],
  ["Bananas","Mango cheeks"]	
	];

	var ingredients=["Almonds","Walnuts","Brown sugar","Gluten free baking powder","Apple","Fresh raspberries","Eggs","Low fat milk","Cocoa powder","Sugar","Mixed berries","Strawberries","Blueberries","Low fat custard","Sponge fingers","Milk chocolate","Frozen raspberries","Raspberry Yoghurt","Cherry Ripe Bar","Bananas","Mango cheeks"];

	var ingredientCalories=[
	[97.0,406.0,7.714,3.486,3.486,0,0.006],
	[25,104.5,2.5,0.5,0.625,0.125,0],
	[11,46,0,2.9,0,2.9,0.001],
	[5,20.93,0,1,0,0,0.78],
	[10,41.86,0.03,2.56,0.05,1.93,0],
	[3,12.558,0,0.907,0.053,0.64,0],
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
	[104,435.4,2.85,12.3,7.65,11.85,0.081],
	[121,506,6.2,14.95,0.85,13.2,0.011],
	[79,330,0.3,20.25,0.975,10.8,0.001],
	[32,133.95,0,8.57,0.357,7.5,0]
	];
	
	var ingredientPrice=[0.89,1.1,0.5,0.25,0.59,1.99,0.30,1.56,1.2,2.14,1.12,1.89,2.59,3.12,1.0,0.95,3.02,1.89,5.12,3.12,3.56];
	
	
	function imageClick(dessertImage){
	var getImageSrc = "Images/dessert"+dessertImage.id +".jpg";
	$("home page.html#reviews").css("background-image",'url(' + getImageSrc + ')');
	$("#imgselected").css("background-image",'url(' + getImageSrc + ')');
	var dessertName=nameArray[dessertImage.id-1]; //adding Drink name
	var dessertDesc=descArray[dessertImage.id-1]; //adding description
	$("#dessertName").text(dessertName);
	$("#dessertDescription").text(dessertDesc);
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		removeSpace() ;
		var x=ingredientArray[dessertImage.id-1];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients

				for (k=1; k<=7; k++){
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


	



