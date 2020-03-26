        // Start All products Small count

        const productsNumber = document.getElementsByClassName('deal');
        const itemsNumber = document.getElementById('items-number');
        itemsNumber.innerHTML = `${productsNumber.length} items`;
        console.log(productsNumber.length);

        // End All products Small count


// ##############################################################


        // Start soring due to prizes
        //---- Start declaring main variables
        let dealPrizes = document.getElementsByClassName("deal-prize");
        let prizesArr = Array.from(dealPrizes);
        const selectEle = document.getElementById('sortProducts');
        //---- End declaring main variables

        function mapping(){
            // -------- Start making arrat of all prizes
            let prizesAddingArray = [];

            prizesArr.map(one=>{
                eachPrize = one.dataset.prize;
                prizesAddingArray.push(eachPrize);
            })
            // -------- End making arrat of all prizes

            // Truning array of strings to numbers
            let b = prizesAddingArray.map(function(item){
                return parseInt(item,10);
            })

            // sorting array numbers from low to high
            let sortedArray;
            function sortingElem(){
                sortedArray = b.sort(function(a,c){return a - c}); 
            }

            sortingElem();

            // Putting all parents elements to an array
            let parentArr = [];
                prizesArr.map(two=>{
                    parentArr.push(two.parentNode.parentElement)
            })

            // 
            for(el=0;el<parentArr.length;el++){

                // Getting all prizes of all parents children
                let finalPrize =  parseInt(parentArr[el].childNodes[3].childNodes[7].dataset.prize);

                // Getting Prizes from parent Elements

                parentArr.map(orderd=>{

                    let orderdPar = orderd.childNodes[3].childNodes[7].dataset.prize;

                    if(orderdPar == finalPrize){
                        orderd.style.order = finalPrize;
                    }

                })

            }

            // End Sorting the array elements
        }


        function consoling(selectEle){
            console.log(selectEle)
        }
        // start getting select element value
        function myFunction(el){
            var val = el.value;
            console.log(val);
        }
        // End getting select element value
        
        // End sotring due to prizes

// ##############################################################