		var playerSelected = true;
		var selectedEnemy = true;
		var gameover = false;

  		document.getElementById("enemy1").innerHTML = "";
        document.getElementById("enemy2").innerHTML = "";
        document.getElementById("enemy3").innerHTML = "";

		var player1={};
		var player2={};
		var listOfEnemies = [];
		var listOfCharacters = [];
		var copyContentsOfCharacterHtml = [];
		var power = 1;
		var enemiesKilled = 0;
	


		var fighter1= {
			name:"Oliver",
			healthPower:550,
			CounterAttack:150,
			attack: 200

		}
		var fighter2= {
			name:"Coach",
			healthPower:400,
			CounterAttack:150,
			attack: 220
		}
		var fighter3= {
			name:"Benji",
			healthPower:250,
			CounterAttack:150,
			attack: 250
		}
		var fighter4= {
			name:"Bruce",
			healthPower:500,
			CounterAttack:150,
			attack: 215
		}

		listOfCharacters =[fighter1, fighter2, fighter3, fighter4];

		$(document).ready(function(){
		
			copyContentsOfCharacterHtml();
			document.getElementById("name1").innerHTML= fighter1.name;
			document.getElementById("healthPower1").innerHTML= "Health Power : " +fighter1.healthPower;
			document.getElementById("CounterAttack1").innerHTML= "Attack Power: " +fighter1.attack;

			document.getElementById("name2").innerHTML= fighter2.name;
			document.getElementById("healthPower2").innerHTML= "Health Power : " +fighter2.healthPower;
			document.getElementById("CounterAttack2").innerHTML= "Attack Power: " +fighter2.attack;


			document.getElementById("name3").innerHTML= fighter3.name;
			document.getElementById("healthPower3").innerHTML= "Health Power : " +fighter3.healthPower;
			document.getElementById("CounterAttack3").innerHTML= "Attack Power: " + fighter3.attack;


			document.getElementById("name4").innerHTML= fighter4.name;
			document.getElementById("healthPower4").innerHTML= "Health Power : " + fighter4.healthPower;
			document.getElementById("CounterAttack4").innerHTML="Attack Power: " + fighter4.attack;
    		// pick your player (which will store those values in a var player1)
		    $("#character1").click(function(x){
		       
		       
		         if( playerSelected === true){
		         	 player1 = fighter1;
		       	listOfEnemies[0] = fighter2;
		       	listOfEnemies[1] = fighter3;
		       	listOfEnemies[2] = fighter4;
		       		document.getElementById("enemy1").innerHTML = document.getElementById("character2").innerHTML;
		       		document.getElementById("enemy2").innerHTML = document.getElementById("character3").innerHTML;
		        	document.getElementById("enemy3").innerHTML = document.getElementById("character4").innerHTML;

		        	document.getElementById("character2").innerHTML = "";
		        	document.getElementById("character3").innerHTML = "";
		        	document.getElementById("character4").innerHTML = "";

		       		alert("You have selected Oliver.");
		         	playerSelected = false;
		       }
		       //move  the deletes players to the enemy section
		   });


		   $("#character2").click(function(x){
		     
		     if( playerSelected === true){
		       player1 = fighter2;
		       listOfEnemies[0] = fighter1;
		       listOfEnemies[1] = fighter3;
		       listOfEnemies[2] = fighter4;
		       document.getElementById("enemy1").innerHTML = document.getElementById("character1").innerHTML;
		       document.getElementById("enemy2").innerHTML = document.getElementById("character3").innerHTML;
		        document.getElementById("enemy3").innerHTML = document.getElementById("character4").innerHTML;

		        document.getElementById("character1").innerHTML = document.getElementById("character2").innerHTML;
		        // document.getElementById("name1").innerHTML = document.getElementById("name2").innerHTML;
		        // document.getElementById("CounterAttack1").innerHTML = document.getElementById("CounterAttack2").innerHTML;
		        // document.getElementById("healthPower1").innerHTML = document.getElementById("healthPower2").innerHTML;
		        document.getElementById("character2").innerHTML = "";
		        document.getElementById("character3").innerHTML = "";
		        document.getElementById("character4").innerHTML = "";
		       alert("You have selected Coach.");
		          	playerSelected = false;
		       }
		       else {
		       	attack();
		       }
		   });

			$("#character3").click(function(){
			          if( playerSelected === true){
			          	   player1 = fighter3;
			       listOfEnemies[0] = fighter1;
			       listOfEnemies[1] = fighter2;
			       listOfEnemies[2] = fighter4;
			       document.getElementById("enemy1").innerHTML = document.getElementById("character1").innerHTML;
			       document.getElementById("enemy2").innerHTML = document.getElementById("character2").innerHTML;
			        document.getElementById("enemy3").innerHTML = document.getElementById("character4").innerHTML;

			 		   document.getElementById("character1").innerHTML = document.getElementById("character3").innerHTML;
		        	// document.getElementById("name1").innerHTML = document.getElementById("name3").innerHTML;
		        	// document.getElementById("CounterAttack1").innerHTML = document.getElementById("CounterAttack3").innerHTML;
		        	// document.getElementById("healthPower1").innerHTML = document.getElementById("healthPower3").innerHTML;
			  		document.getElementById("character3").innerHTML = "";
			        document.getElementById("character2").innerHTML = "";
			        document.getElementById("character4").innerHTML = "";
			       alert("You have selected Benji");
			              	playerSelected = false;
			       }
			   });

		   $("#character4").click(function(){
		      
		            if( playerSelected === true){
		            	      player1 = fighter4;
		        listOfEnemies[0] = fighter1;
		       listOfEnemies[1] = fighter2;
		       listOfEnemies[2] = fighter3;
		       document.getElementById("enemy1").innerHTML = document.getElementById("character1").innerHTML;
		       document.getElementById("enemy2").innerHTML = document.getElementById("character2").innerHTML;
		        document.getElementById("enemy3").innerHTML = document.getElementById("character3").innerHTML;

				   document.getElementById("character1").innerHTML = document.getElementById("character4").innerHTML;
		        document.getElementById("name1").innerHTML = document.getElementById("name4").innerHTML;
		        document.getElementById("CounterAttack1").innerHTML = document.getElementById("CounterAttack4").innerHTML;
		        document.getElementById("healthPower1").innerHTML = document.getElementById("healthPower4").innerHTML;
		  		document.getElementById("character4").innerHTML = "";
		        document.getElementById("character2").innerHTML = "";
		        document.getElementById("character3").innerHTML = "";
		       alert("You have selected Bruce");
		                	playerSelected = false;
		       }

		   		
		   });

		   function copyContentsOfCharacterHtml(){
		   		copyContentsOfCharacterHtml[0] = document.getElementById("character1").innerHTML;
			    copyContentsOfCharacterHtml[1] = document.getElementById("character2").innerHTML;
			    copyContentsOfCharacterHtml[2] = document.getElementById("character3").innerHTML;
			    copyContentsOfCharacterHtml[3] = document.getElementById("character4").innerHTML;


		   }

		   function attack(){
		   	if(!gameover){
		   	    if(selectedEnemy == false){
			   		player1.healthPower = player1.healthPower - (player2.attack - player1.CounterAttack); 
			   		player2.healthPower = player2.healthPower - (player1.attack - player2.CounterAttack);
			   		player1.attack = player1.attack + (power++ * 3);
			   		document.getElementById("life").innerHTML = "Health Power : " + player1.healthPower; 
			   		document.getElementById("energy").innerHTML = "Attack Power: " + player1.attack; 
			   		document.getElementById("life1").innerHTML = "Health Power : " + player2.healthPower;
			   		document.getElementById("energy1").innerHTML = "Health Power : " + player2.attack;
			 
			   		if(player1.healthPower < 0 ){
			   			document.getElementById("winLose").innerHTML = "YOU LOST"; 
			   			document.getElementById("life").innerHTML = "0"; 
			   			playerSelected = false;
			   			gameover = true;
			   			document.getElementById("character2").innerHTML = '<button type="button" class="btn-danger attack ">Play Again</button>';
			   			//gameover
			   			//enable reset button
			   		}
			   		if(player2.healthPower < 0){
			   			document.getElementById("character4").innerHTML = "";
			   			document.getElementById("life1").innerHTML = "Health Power : " + 0;
			   		    document.getElementById("energy1").innerHTML = "Attack Power : " + 0;
			   			player2 = {};
			   			enemiesKilled++;
			   			selectedEnemy = true;
			   		}
			   		if(enemiesKilled === 3){
			   				document.getElementById("winLose").innerHTML = "YOU WON!";	
			   			    selectedEnemy = true;
			   				gameover = true;
			   				document.getElementById("character2").innerHTML = '<<button type="button" class="btn-danger attack">Play Again</button>';

			   			//you win 
			   			//enable reset button
			   		}
			   	}
			 } else {
			 	 gameover = false;
			 	 player1 = {};
			 	 player2 = {};
			 	 playerSelected = true;
				 selectedEnemy = true;

				 listOfEnemies = [];
				 listOfCharacters = [];
				 power = 1;
				 enemiesKilled = 0;
				document.getElementById("character1").innerHTML = copyContentsOfCharacterHtml[0];
				document.getElementById("character2").innerHTML = copyContentsOfCharacterHtml[1];
		        document.getElementById("character3").innerHTML = copyContentsOfCharacterHtml[2];
		        document.getElementById("character4").innerHTML = copyContentsOfCharacterHtml[3];
		        document.getElementById("life").innerHTML = "";
			    document.getElementById("energy").innerHTML = "";
			    document.getElementById("life1").innerHTML = "";
			    document.getElementById("energy1").innerHTML = "";
			    document.getElementById("name1").innerHTML= fighter1.name;
		
		  		document.getElementById("enemy1").innerHTML = "";
		        document.getElementById("enemy2").innerHTML = "";
		        document.getElementById("enemy3").innerHTML = "";
		        document.getElementById("winLose").innerHTML = "";	

		         fighter1= {
					name:"Oliver",
					healthPower:550,
					CounterAttack:150,
					attack: 200

				}
				 fighter2= {
					name:"Coach",
					healthPower:400,
					CounterAttack:150,
					attack: 220
				}
				 fighter3= {
					name:"Benji",
					healthPower:250,
					CounterAttack:150,
					attack: 250
				}
				 fighter4= {
					name:"Bruce",
					healthPower:500,
					CounterAttack:150,
					attack: 215
				}

				document.getElementById("healthPower1").innerHTML= "Health Power : " +fighter1.healthPower;
				document.getElementById("CounterAttack1").innerHTML= "Attack Power: " +fighter1.attack;

				document.getElementById("name2").innerHTML= fighter2.name;
				document.getElementById("healthPower2").innerHTML= "Health Power : " +fighter2.healthPower;
				document.getElementById("CounterAttack2").innerHTML= "Attack Power: " +fighter2.attack;


				document.getElementById("name3").innerHTML= fighter3.name;
				document.getElementById("healthPower3").innerHTML= "Health Power : " +fighter3.healthPower;
				document.getElementById("CounterAttack3").innerHTML= "Attack Power: " + fighter3.attack;


				document.getElementById("name4").innerHTML= fighter4.name;
				document.getElementById("healthPower4").innerHTML= "Health Power : " + fighter4.healthPower;
				document.getElementById("CounterAttack4").innerHTML="Attack Power: " + fighter4.attack;

			 }
		   }

		   function setStage(x){
		   	
			 	document.getElementById("character2").innerHTML = '<button type="button" class="btn-danger attack">Attack!</button>';
			 	document.getElementById("character3").innerHTML = '<h1 class="header1">VS</h1>';
			 	document.getElementById("CounterAttack1").innerHTML = "";
			 	document.getElementById("healthPower1").innerHTML = "";
			 	document.getElementById("CounterAttack2").innerHTML = "";
			 	document.getElementById("healthPower2").innerHTML = "";
			 	document.getElementById("CounterAttack3").innerHTML = "";
			 	document.getElementById("healthPower3").innerHTML = "";
			 	document.getElementById("CounterAttack4").innerHTML = "";
			 	document.getElementById("healthPower4").innerHTML = "";
			 	document.getElementById("life").innerHTML = "Health Power : " + player1.healthPower; 
			   	document.getElementById("energy").innerHTML = "Attack Power: " + player1.attack; 
			   	document.getElementById("life1").innerHTML = "Health Power : " + player2.healthPower;
			   	document.getElementById("energy1").innerHTML = "Attack Power : " + player2.attack;



		   }

			    // pick your enemy (which will store those values in a var player2)
			 $("#enemy1").click(function(){
			 			if(selectedEnemy){
			 			 player2 = listOfEnemies[0];
			 	            document.getElementById("character4").innerHTML = document.getElementById("enemy1").innerHTML;
		        		  document.getElementById("enemy1").innerHTML = "";
			 	          selectedEnemy = false;
			 	         document.getElementById("life1").innerHTML = "Health Power : " + player2.healthPower;
			   		    document.getElementById("energy1").innerHTML = "Attack Power : " + player2.attack;
			 	       	  setStage(1);
			 	      	}

			    });

			 $("#enemy2").click(function(){
			 		if(selectedEnemy){
			 			 player2 = listOfEnemies[1];
							document.getElementById("character4").innerHTML = document.getElementById("enemy2").innerHTML;
			 	          document.getElementById("enemy2").innerHTML = "";
			 	           document.getElementById("life1").innerHTML = "Health Power : " + player2.healthPower;
			   		    document.getElementById("energy1").innerHTML = "Attack Power : " + player2.attack;
			 	          selectedEnemy = false;
			 	          setStage(2);

			 	      }

			    });

			  $("#enemy3").click(function(){
			  			if(selectedEnemy){
			  		      player2 = listOfEnemies[2];
							document.getElementById("character4").innerHTML = document.getElementById("enemy3").innerHTML;
			 	          document.getElementById("enemy3").innerHTML = "";
			 	           document.getElementById("life1").innerHTML = "Health Power : " + player2.healthPower;
			   		    document.getElementById("energy1").innerHTML = "Attack Power : " + player2.attack;
			 	          selectedEnemy = false;
			 	          setStage(3);
			 	      }

			    });
   

		});