


        // localStorage.removeItem("datelist")
        const container = document.querySelector('.container2');
        const input = document.querySelector('.input-container input');

        const searchButton = document.getElementById('searchButton');

        container.addEventListener('click', function () {
            input.classList.remove('hidden');
            searchButton.classList.remove('hidden');
        });

        let dated

        searchButton.addEventListener('click', function () {

            const containersec = document.getElementById('container');
            const container3 = document.querySelector('#container3');
            const body = document.getElementById('body');

            const find = JSON.parse(localStorage.getItem('plans'));

            const selectedDate = date.value;
            console.log('date:', selectedDate);

            const selectedDates = document.getElementById("date").value
            dated = selectedDates
            // console.log(selectedDates)
            const userid = JSON.parse(localStorage.getItem('number_id'));
            const storedplan = JSON.parse(localStorage.getItem('plans'));
            const storedData = JSON.parse(localStorage.getItem('user_workoutplans'));
            // console.log(storedData);
            const storedplans = JSON.parse(localStorage.getItem('user_dietplans'));
            // console.log(storedplans);

            const filterplan = storedplan.filter(item => (item.date === selectedDates) && (item.client_id === userid));
            console.log(filterplan)
            
            if (filterplan.length === 0) {
                // Data not found for the selected date
                // alert('No data found for the selected date');

                container3.style.display = '';
                containersec.style.display = 'none';
                body.style.backgroundColor = 'white';
            }

            const filteredData = storedData.filter(item => (item.user_plan_uuid === filterplan[0].user_plan_uuid));

            console.log(filteredData)
            const filteredPlan = storedplans.filter(item => (item.user_plan_uuid === filteredData[0].user_plan_uuid));
            console.log(filteredPlan)

            if (filterplan.length > 0) {
                const calorie = filterplan[0].calorie;
                document.getElementById("calorie").innerText = calorie;
                console.log(calorie);
            }
            if (filterplan.length > 0) {
                const water = filterplan[0].water;
                document.getElementById("water").innerText = water;
                console.log(water);
            }

            // document.getElementById("water").value = user_workoutplans.water;

            const filetplans = [];
            for (let i = 0; i < filteredData.length; i++) {
                const plans = storedplans.find(item => item.user_plan_uuid === filteredData[i].user_plan_uuid);
                filetplans.push(plans)
            }

            if (filteredData.length > 0) {
                const firstFilteredData = filteredData[0]; // Assuming you only want the first matching item
                //             for (let i = 0; i < filteredData.length; i++) {

                // document.getElementById("Workout").innerHTML = filteredData.Workout;
                // document.getElementById("calorie").innerHTML = filteredData.calorie;
            }

            const container4 = document.querySelector('.subcontainer4');
            console.log(filteredPlan)
            container4.innerHTML = "";
            filteredPlan.forEach((diet, index) => {
                let count = index
                console.log(count)
                const plandivDiv = document.createElement('div');
                plandivDiv.className = 'plandiv';
                plandivDiv.id = `Diet_${count}`;

                const dietname = document.createElement("p")
                dietname.innerText = filteredPlan[count].diets
                console.log(filteredPlan[count].diets)
                plandivDiv.appendChild(dietname);

                container4.appendChild(plandivDiv)

                // count++
            });

            //For creating diet container

            const container5 = document.querySelector('.subcontainer5');
            container5.innerHTML = "";
            filteredData.forEach((workout, index) => {
                let count = index
                const plandivDiv = document.createElement('div');
                plandivDiv.className = 'plandiv';
                plandivDiv.id = `Workout_${count}`;

                const workoutName = document.createElement("p")
                workoutName.innerText = filteredData[count].workouts

                plandivDiv.appendChild(workoutName);

                container5.appendChild(plandivDiv);

                // count++
            });


        }
        );


        const backbtn = document.getElementById('backbtn');
        const contback = document.getElementById('container3');
        const maincontainer = document.getElementById('container');

        backbtn.addEventListener('click', function () {
            if (maincontainer.style.display === 'none') {
                maincontainer.style.display = '';
                contback.style.display = 'none';
                body.style.backgroundColor = 'white';
            }
        });

        const diet = document.getElementById('dietbtn');
        const maincnt = document.getElementById('container');
        const containerplans = document.getElementById('container4');

        diet.addEventListener('click', function () {
            if (maincnt.style.display === '') {
                maincnt.style = 'filter: blur(8px); -webkit-filter: blur(8px);';
                containerplans.style.display = '';
            }
        });

        const cancelbtn = document.getElementById('dietcancel');
        const main = document.getElementById('container');
        const containerplan = document.getElementById('container4');

        cancelbtn.addEventListener('click', function () {
            if (containerplan.style.display === '') {
                main.style = '';
                containerplan.style.display = 'none';
            }
        });



        const workout = document.getElementById('workoutbtn');
        const maincnt2 = document.getElementById('container');
        const containerwrks = document.getElementById('container5');

        workout.addEventListener('click', function () {
            if (maincnt2.style.display === '') {
                maincnt2.style = 'filter: blur(8px); -webkit-filter: blur(8px);';
                containerwrks.style.display = '';
            }
        });

        const cancelbtn2 = document.getElementById('wrkcancel');
        const main2 = document.getElementById('container');
        const containerwrk = document.getElementById('container5');

        cancelbtn2.addEventListener('click', function () {
            if (containerwrk.style.display === '') {
                main2.style = '';
                containerwrk.style.display = 'none';
            }
        });
