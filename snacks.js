	
$( document ).ready(function() {
	var imageSrc = "Images/snacks1.jpg";
	$("#imgselected").css("background-image",'url(' + imageSrc + ')');
	$("#snacksName").text("Bruschetta Capsicum & Eggplant");
	$("#snacksDescription").text("This recipe can be used to prepare a healthy entree, light lunch or afternoon snack and is perfect for finger food for any special event or gathering.");
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		
		var x=ingredientArray[0];
		for (j=1; j<=x.length; j++)
		addCheckbox(x[j-1]);//adding checkboxes and labels of ingredients
		populateCalories();
		populatePrice();
		

		$('#registerUser').click(function(){
		if (formIsFilled()&& validateemail()&& validateConfirmPassword()&& validatePassword())
		{
			$("#registerSuccess").text("Thanks for registering to FitFoodie");
			resetForm();
			return true;
			
		}
		else
		{
		return false;
		}
		});	

		function formIsFilled(){
		if($('#firstname').val()!="" && $('#lastname').val()!="" && $('#regEmail').val()!="" && $('#pass').val()!="" && $('#confirmpass').val()!=""  )
		{
		$("#warning1").text("");
		return true;
		}
		else 
		{
		$("#warning1").text("All fields are mandatory");
		return false;
		}
		}
			
		$('#regEmail').blur(function(){
			validateemail();
		});

		$('#pass').blur(function(){
		validatePassword();
		});
	
		$("#confirmpass").blur(function(){
		validateConfirmPassword();
		});
		function validateemail(){
		var emailVar=$("#regEmail").val();
			var emailRegExp = /^[a-zA-Z0-9_.]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,3}$/;
			if(emailRegExp.test(emailVar))
				{
				$("#emailSpan").text("");
				return true;
				}
			else
				{
				$("#emailSpan").text("Enter a valid Email ID");
				return false;
				}
		}
		


		function validatePassword(){
		var pass=$("#pass").val();
		var myRegExppass=/^([a-zA-Z0-9@*#]{8,15})$/;
		if(myRegExppass.test(pass))
		{	
		$("#passSpan").text("");
		return true;
		}
		else
		{
		$("#passSpan").text("Not a valid password");
		return false;
		}
		}

		function validateConfirmPassword(){
		var confirmpass = $("#confirmpass").val();
		var pass=$("#pass").val();
		var myRegExppass=/^([a-zA-Z0-9@*#]{8,15})$/;
		if(myRegExppass.test(confirmpass))
		{	
			$("#confirmPassSpan").text("");
			if(confirmpass==pass)
				{
				$("#confirmPassSpan").text("");
				return true;
				}
			else{
				$("#confirmPassSpan").text("Passwords donot match!");
				return false;
				}
		}
		else
		{
			$("#confirmPassSpan").text("Not a valid password");
			return false;
		}

		}
		$('#closeButton').click(function(){
		resetForm();
		});
		
	function resetForm(){
		$('#firstname').val("");
		$('#lastname').val("");
		$('#regEmail').val("");
		$('#confirmpass').val("");
		$('#pass').val("");
		$('#warning1').text("");
	}

	
	
});

	var nameArray =new Array("Bruschetta Capsicum & Eggplant",
							"Potato and Chive Cakes",
							"Sweet Green Smoothie",
							"Thai Chicken Party Pies",
							"Yoghurt Medley");
	var descArray=new Array("This recipe can be used to prepare a healthy entree, light lunch or afternoon snack and is perfect for finger food for any special event or gathering.",
							"These mini potato & chive cakes are easy to prepare & a joy to eat",
							"This drink has some really nutritious ingredients that combined taste really good together.",
							"These delicious mini pies are a great little treat for parties, lunch or as a snac",
							"This combines a number of wonderful ingredients, including Chia"
							
							);

	var ingredientArray = [
  ["Capsicum","Eggs","Basil","Parmesan Cheese"],
  ["Eggs","Flour","Chives","Mustard","Tomatoes"],
  ["Banana","Apple","Kiwi","Lime","Spinach"],
  ["Eggs","Chicken","Fish Sauce","Peas","Coconut Milk"],
  ["Banana","Almonds","Apple","Greek Yoghurt"]	
	];

	var ingredients=["Capsicum","Eggs","Basil","Parmesan Cheese","Flour","Chives","Mustard","Tomatoes","Banana","Apple","Kiwi","Lime","Spinach","Chicken","Fish Sauce","Peas","Coconut Milk","Almonds","Greek Yoghurt"];

	var ingredientCalories=[
	[97.0,6.0,7.714,3.486,3.486,0,0.006],
	[25,104.5,2.5,0.5,0.625,0.125,0],
	
	[10,41.86,0.03,2.56,0.05,1.93,0],
	[3,12.558,0,0.907,0.053,0.64,0],
	
	[45,188.38,0.7,8.15,1.45,5.7,0],
	[2,8.336,0.042,0.332,0,0.166,0.002],
	[23,96.278,0.33,5.61,0.66,1.98,0],
	[32,133.9,0.167,6.67,0.501,0,0],
	[17,71,0.1,0.2,3.6,0.2,0.033],
	[13,54.418,0.135,3.156,0.27,1.996,0.001],
	[23,96.278,0.131,5.937,0.295,4.067,0],
	[28,117,0.625,3.25,2.25,3,0.033],
	
	
	
	[45,188.38,0.7,8.15,1.45,5.7,0],
	[32,133.9,0.167,6.67,0.501,0,0],
	[11,46,0,2.9,0,2.9,0.001],
	[5,20.93,0,1,0,0,0.78],
	[20,83.72,0.125,4.25,0.25,2.5,0],
	[79,330,0.3,20.25,0.975,10.8,0.001],
	[32,133.95,0,8.57,0.357,7.5,0],
	[104,435.4,2.85,12.3,7.65,11.85,0.081],
	[121,506,6.2,14.95,0.85,13.2,0.011],
	[79,330,0.3,20.25,0.975,10.8,0.001],
	[32,133.95,0,8.57,0.357,7.5,0],
	[2,8.336,0.042,0.332,0,0.166,0.002]
	];
	
	var ingredientPrice=[2.36,2.69,3.36,4.23,6.36,2.36,5.36,7.36,2.36,1.36,5.36,4.23,5.36,4.36,5.36,4.69,1.36,2.36,5.36];
	
	
	function imageClick(snacksImage){
	var getImageSrc = "Images/snacks"+snacksImage.id +".jpg";
	$("home page.html#reviews").css("background-image",'url(' + getImageSrc + ')');
	$("#imgselected").css("background-image",'url(' + getImageSrc + ')');
	var snacksName=nameArray[snacksImage.id-1]; //adding snacks name
	var snacksDesc=descArray[snacksImage.id-1]; //adding description
	$("#snacksName").text(snacksName);
	$("#snacksDescription").text(snacksDesc);
		removeCheckbox();//remove all checkboxes
		removeLabel();//remove all labels
		removeSpace() ;
		var x=ingredientArray[snacksImage.id-1];
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


	



