document.getElementById('button').addEventListener('click', function(e) {
    // e.preventDefault(); // Prevent form submission if applicable
    var name1 = document.getElementById('yourname').value;
    var name2 = document.getElementById('partnername').value;
  
    if (name1 === '' || name2 === '') {
      alert('Please enter both names.');
      return;
    }
  
    var loveScore = calculateLoveScore(name1, name2); // Implement this function based on your logic
    document.getElementById('resultText').innerHTML = `Love Score: ${loveScore}%`;
    document.getElementById('loveMessage').innerHTML = getLoveMessage(loveScore,name1,name2); // Implement this function based on your logic
  
    var modal = document.getElementById('loveModal');
    var span = document.getElementsByClassName("close")[0];
  
    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
  function calculateLoveScore(name1, name2) {
    if(name1.length <= 2){
        alert("Enter a valid Name with Three Characters");
        return;
    } else if(name2.length <= 2){
        alert("Enter a valid Name with Three Characters");
        return;
    }    
    else{
        var randomNumber =Math.floor(Math.random()*100+1);
         return randomNumber;
    }
  }
  
  function getLoveMessage(score, _name1, _name2) {
    if (score > 80) {
      return "Perfect Match is a captivating novel that delves into ethical dilemmas, the consequences of individual choices, and the power of love and redemption. With its complex characters, thought-provoking themes, and unexpected plot twists, this book will keep readers on the edge of their seats while prompting them to contemplate the underlying ethical and moral questions it raises. Jodi Picoult tackles these complex issues with sensitivity, creating a literary masterpiece that will leave a lasting impact on readers long after they turn the final page.You're a perfect match!";
    } else if (score > 50) {
      return "The chance of a relationship working out between " + _name1 +  " and "  + _name2 +" is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.";
    } else {
      return "Dr. Love thinks a relationship might work out between " + _name1 +  "and"  + _name2 +" but the chance is very small. A successful relationship is possible, but you both have to work on it. Do not sit back and think that it will all work out fine, because it might not be working out the way you wanted it to. Spend as much time with each other as possible. Again, the chance of this relationship working out is very small, so even when you do work hard on it, it still might not work out.";
    }
  }
  