	
$( document ).ready(function() {
	var imageSrc = "Images/drink1.jpg";
	$("#imgselected").css("background-image",'url(' + imageSrc + ')');
	$("#drinkName").text("Boysenberry & Honey Milkshake");
	$("#drinkDescription").text("This Boysenberry and Honey Milkshake is lovely and refreshing and is great for a quick breakfast or snack on the run");
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		
		var x=ingredientArray[0];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients
		populateCalories();
		populatePrice();
		

		
	
});

	var nameArray =new Array("Boysenberry & Honey Milkshake",
							"Banana & Prune Smoothie",
							"Red Grapefruit Slushy",
							"Banana & Blueberry Smoothie",
							"Berry Frappe");
	var descArray=new Array("This Boysenberry and Honey Milkshake is lovely and refreshing and is great for a quick breakfast or snack on the run",
							"This Smoothie will get you up & going in the morning & put some pep in your step. Ripe to over ripe bananas are best to add sweetness.",
							"This is a great refreshing drink that has a touch of sharpness coming from the grapefruit.",
							"This makes a great breakfast, is packed with calcium, antioxidants & vitamins, & because it contains fresh banana & oats, will keep you feeling full until lunchtime.",
							"This Berry Frappe recipe is very refreshing and very simple to make, any time of the year"
							
							);

	var ingredientArray = [
  ["Boysenberries","Low fat milk","Low fat vanilla yogurt","Honey"],
  ["Banana","Prunes","Chia seeds","Low fat milk","Low fat natural yoghurt","Ice"],
  ["Red grapefruit","Blueberries","Low fat milk","Mango Sorbet","Ice"],
  ["Banana","Low fat milk","Low fat vanilla yogurt","Oats","Honey"],
  ["Raspberries","Blueberries ","Cranberry juice","Orange juice",'Ice']	
	];

	var ingredients=["Boysenberries","Low fat milk","Low fat vanilla yogurt","Honey","Banana","Prunes","Chia seeds","Low fat natural yoghurt","Red grapefruit","Blueberries","Mango Sorbet","Oats","Raspberries","Cranberry juice","Orange juice"];

	var ingredientCalories=[
	[23.0,96.0,0.17,6.0,0.34,3.67,0],
	[220.0,920.0,5.0,26.0,1.8,6.2,0.26],
	[85.0,355.0,0.75,16.0,3.0,13.0,0.05],
	[3.0,0,0,0.85,0.8,0,0],
	[105.0,440.0,0.4,27.0,1.3,14.4,0.001],
	[112,469,0,27,1.08,14.52,0.006],
	[15,63,1.25,1.5,0.75,0,0],
	[65,272,1.5,7.2,5,7.2,0.1],
	[60,289,0,16,0,13,0.015],
	[42,176,0.237,10.7,0.533,7.3,0.001],
	[240,1156,0,58,0,54,0],
	[42,176,0.9,7.025,1.47,0.15,0.002],
	[21,88,0.264,4.85,0.54,1.78,0],
	[110,530,0,28,0,28,0.015],
	[37,155,0.165,8.5,0.56,6.86,0.001]
	];
	
	var ingredientPrice=[1.99,2.49,3.39,1,1,3.5,2.15,3.0,1.59,2.79,3.99,2.30,2.19,3.45,2.45];
	
	
	function imageClick(drinkImage){
	
	var getImageSrc = "Images/drink"+drinkImage.id +".jpg";
	$("home page.html#reviews").css("background-image",'url(' + getImageSrc + ')');
	$("#imgselected").css("backgroundImage",'url(' + getImageSrc + ')');
	
	var drinkName=nameArray[drinkImage.id-1]; //adding Drink name
	var drinkDesc=descArray[drinkImage.id-1]; //adding description
	$("#drinkName").text(drinkName);
	$("#drinkDescription").text(drinkDesc);
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		removeSpace() ;
		var x=ingredientArray[drinkImage.id-1];
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


	



