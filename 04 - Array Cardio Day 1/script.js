// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
alert('HI')
    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
      console.log(fifteen);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const firstAndLast = inventors.map(({first, last})=>({first:first,last:last}))
      console.log(firstAndLast);

      const firstAndLast2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
      console.log(firstAndLast2);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const order = inventors.sort(function(a,b){
        if(a.year > b.year) {
            return 1
        } else {
            return -1
        }
      })
            /* 
            Returns 1 or -1 : this will be sorted by the inventors.sort() function
            to push around the items here and there, because the sort item is built ascending,
            done by converting the elements into strings, comparing their sequences of UTF-16 Code
            units values. 

            For example, ['March', 'Jan', 'Feb', 'Dec'] = ["Dec", "Feb", "Jan", "March"];
            For example, [1, 30, 4, 21, 100000] = [1, 100000, 21, 30, 4]; ==> compares the first digit
            */
      console.table(order);
      
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const totalYears = inventors.reduce((total,inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0
      );

      console.table(totalYears);

        /* 
        (total, inventor) => syntax is (the item we want returned, the name of each item inside the array
        we want to reduce)

        0 at the end is to say that our calculations start at 0    
        */

      // 5. Sort the inventors by years lived

      const order2 = inventors.sort(function(a,b){
        let aYearLived = a.passed - a.year;
        let bYearLived = b.passed - b.year;
        if(aYearLived > bYearLived){
            return -1
        } else {
            return 1
        }
      })

      console.table(order2)
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

      /*
      const category = document.querySelector('.mw-category');
      const links = Array.from(category.querySelectorAll('a'));
      const de = links
        .map(link => link.innerText)
        .filter(streetName => streetName.includes('de'));

      console.log(de); */
  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name

      const sortingExercise = people.sort(function(name1,name2){
        const [aLast , aFirst] = name1.split(', ');
        const [bLast , bFirst] = name2.split(', ');
        return aLast > bLast ? 1 : -1 ;
      }
      )
      console.log(sortingExercise);

      /*

      Using object destructuring, it will organize and name the variable as such.
      comparing using sort method (if the first character in aLast's UTF Code is bigger
      than the first character in bLast's UTF Code, it will return 1)
  
      */
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      const reduceExercise = data.reduce(function(obj,count){
        if(!obj[count]){
            obj[count] = 0;
            //there is no counter we will set it to 0.
        }
        obj[count]++;
        return obj
            //if there is, we will increment it by one each time the same object is iterated.
      }, {});

      console.log(reduceExercise);

      /* 
      If the object count has no counter, it will register, if it does, it will increment it
      after each time looping over an item.
      */

      /* 
      {} At the end, we start with a blank object, everytime we loop over one
      we see if :

        there is no counter we will set it to 0.

        if there is, we will increment it by one each time the same object is iterated.

     */
  