const trainer_details = [{
  Trainer_Achivements:
        'Mr.Tamilnadu ',
  Trainer_Experience:
        '3-years',
  Trainer_address:
        'no-5,colachel,kanniyakumari',
  Trainer_gender:
        'Male',
  trainer_age:
        '29',
  trainer_name:
        'aravin A',
  trainer_number:
        '12345',
  trainer_password:
        '1234',
  trainer_uuid:
        '0960bb6a-1b07-45fe-b3fb-e1d9b1b6f176',
},
];

const trainer_detail = JSON.parse(localStorage.getItem('trainer_data'));

if (!trainer_detail) {
  localStorage.setItem('trainer_data', JSON.stringify(trainer_details));
}

const user_details = [{
  addressline1:
        '10/92,anbiyam-5',
  addressline2:
        'church street, vaniyakudi',
  asign_trainer:
        'Aravin',
  city:
        'colachel',
  pincode:
        '1234',
  state:
        'tamilnadu',
  user_age:
        '22',
  user_firstname:
        'Arul',
  user_gender:
        'Male',
  user_height:
        '174',
  user_lastname:
        'Ajun',
  user_number:
        '7502869260',
  user_package:
        '+ Cardio(1000 rps)',
  user_password:
        'mobiajun55',
  user_photo:
        'https://iili.io/Hh5KRWu.md.jpg',
  user_service:
        'Weight Lose',
  user_uuid:
        '14030c01-7530-4c4b-a2c8-bd4afd3a0e10',
  user_weight:
        '79',
},
{
  addressline1:
        'no-05',
  addressline2:
        'west street, perungudi',
  asign_trainer:
        'Aravin',
  city:
        'chennai',
  pincode:
        '600004',
  state:
        'tamilnadu',
  user_age:
        '21',
  user_firstname:
        'tommy',
  user_gender:
        'Male',
  user_height:
        '174',
  user_lastname:
        'thamim',
  user_number:
        '123',
  user_package:
        '+ Cardio(1000 rps)',
  user_password:
        '12345',
  user_photo:
        'https://iili.io/HvJFkdv.md.jpg',
  user_service:
        'Weight Lose',
  user_uuid:
        '14030c01-7530-4c4b-a2c8-bd4d3a0e10',
  user_weight:
        '79',
},
{
  addressline1:
        'No - 01',
  addressline2:
        'West street',
  asign_trainer:
        'Aravin',
  city:
        'Thirunelveli',
  pincode:
        '1234',
  state:
        'tamilnadu',
  user_age:
        '18',
  user_firstname:
        'Sesslyn',
  user_gender:
        'Female',
  user_height:
        '158',
  user_lastname:
        'Johnson',
  user_number:
        '123456',
  user_package:
        '+ Cardio(1000 rps)',
  user_password:
        '123',
  user_photo:
        'https://iili.io/HvJx407.md.jpg',
  user_service:
        'Weight Gain',
  user_uuid:
        '14030c01-7530-4c4b-a2c8-fd3a0e10',
  user_weight:
        '51',
},
{
  addressline1:
        'No - 16',
  addressline2:
        'South street',
  asign_trainer:
        'Aravin',
  city:
        'chennai',
  pincode:
        '1234',
  state:
        'tamilnadu',
  user_age:
        '20',
  user_firstname:
        'Dhanush',
  user_gender:
        'Male',
  user_height:
        '168',
  user_lastname:
        'Kowmart',
  user_number:
        '1234567',
  user_package:
        '+ Cardio(1000 rps)',
  user_password:
        '123',
  user_photo:
        'https://iili.io/HvJFkdv.md.jpg',
  user_service:
        'Weight Gain',
  user_uuid:
        '14030c01-7530-4c4b-a2c8-bd4afd3a0e10',
  user_weight:
        '67',
}];

const user_detail = JSON.parse(localStorage.getItem('user_data'));

if (!user_detail) {
  localStorage.setItem('user_data', JSON.stringify(user_details));
}

const plan_detail = [{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Chest workout',
  client_id:
        '7502869260',
  day:
        'Monday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Back workout',
  client_id:
        '7502869260',
  day:
        'Tuesday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Shoulder workout',
  client_id:
        '7502869260',
  day:
        'Wednesday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Triceps workout',
  client_id:
        '7502869260',
  day:
        'Thursday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Biceps workout',
  client_id:
        '7502869260',
  day:
        'Friday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Abs workout',
  client_id:
        '7502869260',
  day:
        'Saturday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
{
  Breakfast:
        'Scrambled eggs, stir-fried veggies, and oatmeal.',
  Dinner:
        'Broiled fish, green beans with brown rice.',
  Lunch:
        'Grilled chicken breast, mixed greens, and baked sweet potato.',
  Snack_one:
        'Whey protein shake',
  Snack_two:
        'Hard-boiled egg(s) and carrot sticks',
  Workouts:
        'Leg workout',
  client_id:
        '7502869260',
  day:
        'Sunday_plan',
  user_plan_uuid:
        '15301a85-1ced-45b2-8b67-7e7d205205e0',
  workout_five:
        '5.Chest Fly : 4 sets of 6-12 reps',
  workout_four:
        '4.Weighted Pushups : 3 sets of 8-12 reps',
  workout_one:
        '1.Barbell Bench Press : 4 sets of 6-12 reps',
  workout_six:
        '6.Machine Fly : 3 sets of 8-12 reps',
  workout_three:
        '3.Weighted Dips : 3 sets of 8-12 reps',
  workout_two:
        '2.Incline DB Bench Press : 4 sets of 6-12 reps',
},
];

const plan_details = JSON.parse(localStorage.getItem('user_plan'));

if (!plan_details) {
  localStorage.setItem('user_plan', JSON.stringify(plan_detail));
}

const workouts = [{
  benifits:
        'Bench presses can be used to increase strength, improve endurance, and tone the muscles of the upper body, including the chest, arms, and shoulders.1 to 3 times per week could help optimize strength gains.However the number of times that you should perform a bench press per week depends on your personal goals and fitness routine',
  category:
        'chest_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-67895495762',
  workoutname:
        'Barbell Bench Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This workout help for improve your upper chest.Not only is the incline bench press a classic way to build the upper chest, many lifters find them to be a more comfortable main lift for the shoulders than flat benching. It's great with a barbell or multi-grip bar, but maybe be even better with dumbbells, since you can customize your grip to increase focus on the upper pecs",
  category:
        'chest_workout',
  rep:
        '12-10-08-06',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-67854957629',
  workoutname:
        'Incline Bench Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Bench presses can be used to increase strength, improve endurance, and tone the muscles of the upper body, including the chest, arms, and shoulders.1 to 3 times per week could help optimize strength gains.However the number of times that you should perform a bench press per week depends on your personal goals and fitness routine',
  category:
        'chest_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-67895495729',
  workoutname:
        'Dumbbell Bench Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "The common thinking on decline is that it's for lower chest only. And while it is good for that, all-time greats, like six-time Mr. Olympia Dorian Yates in his 6-Week Blood and Guts program, favor it because it hits the entire chest and allows them to lift heavier and more comfortably than the flat bench.",
  category:
        'chest_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-68954957629',
  workoutname:
        'Decline Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Free-weight pressing moves on a flat bench are great, but machine press and cable press variations have some unique benefits. For one, it's easier to slow down the repetition, both in the concentric and eccentric phases. Stack-loaded machines are also great for quickly doing dropsets.",
  category:
        'chest_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-6789557629',
  workoutname:
        'Machine Chest Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "An obvious point in favor of push-ups is that they require no equipment and can be the centerpiece of a home chest workout,Sets of push-ups to failure are a great way to burn out or add volume in the late stages of a workout, and they're awesome in a compound set with dips, a mechanical dropset after flyes or presses,or an antagonist chest-and-back superset with rows.",
  category:
        'chest_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-ad18-6789595629',
  workoutname:
        'Push-Up',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "There are many reasons to like leg raises, but top of the list is their scalability. You can start doing bent-knee raises in a captain's chair or with ab straps to focus on the lower core, work up to straight-leg raises, and then move to a hanging bar.",
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-68959629',
  workoutname:
        'Hanging Knee Raise',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Ab exercises with added resistance don't get enough love! Extra resistance spurs growth in the fast-twitch muscle fibers like almost nothing else and can really build up the bricks of your six-pack.",
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-78959562',
  workoutname:
        'Machine Crunch',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'The Pallof press is an anti-rotation movement, meaning the body is actively fighting rotation throughout the motion. By utilizing exercises like this, you can increase core stability in various planes of movement and reduce the likelihood of injury.',
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-789952',
  workoutname:
        'Pallof Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'This old-school fave amps up the ab engagement by increasing the range of motion over standard crunches. You can also dial up—or down—the degree of difficulty by adjusting the angle of the bench.',
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-859',
  workoutname:
        'Decline Crunch',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'To recruit the obliques, you need to do one of three motions: 1.Bend to the side,2.Rotate your trunk,3.Suck in your belly.',
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-7812359562',
  workoutname:
        'Russian Twist',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'No were not going to echo that old myth that squats and deads are all you need for abs. You need more! But there no debating that both front and back squats force you to learn how to brace your abs to maintain a neutral, upright position.',
  category:
        'abs_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-4eb-a8-823562',
  workoutname:
        'Squat',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This mighty pull is far more than a back exercise. It hits the entire posterior chain, from your calves to your upper traps, but it's also a time-tested standout for overall backside development.",
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-3562',
  workoutname:
        'Deadlift',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This is a total back-builder: upper back, lower back, lats, traps, spinal erectors—the whole deal. And the science backs it up. It's a staple of the best back workouts for men, but make no mistake, it's great for back workouts for women, as well.",
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a42618-48eb-a8-823562',
  workoutname:
        'Bent-Over Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "It's always a good idea to have an overhead pulling movement in your back routine, and the pull-up is one of the best. Each variation has its own advantages: Wide-grip variations are great for the upper lats, while close-grip chins or neutral-grip pull-ups have a greater stretch and overall range of motion. Mix it up!",
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-823562',
  workoutname:
        'Pull-Up',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "The T-bar row may seem at first glance like another variation of the bent-over row, but serious lifters know there's a big difference. For one, you can pile on more weight!You also typically have a choice of hand positions and width. A wider grip will put more emphasis on the lats, while a neutral grip will better target the middle back (rhomboids, teres, and traps).",
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-82153562',
  workoutname:
        'T-Bar Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Unlike every free-weight variation here, the classic seated row maintains constant tension throughout every inch of the movement.Plus, many gyms have a wide range of handles that you can clip onto a seated cable row with a carabiner, giving you all manner of wide and narrow grips and different hand positions.',
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-423eb-a8-823562',
  workoutname:
        'Seated Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "While some gym rats consider the Smith machine taboo, you shouldn't. The fixed plane of the movement allows you to pull heavy with lots of stability, making for a humbling exercise.Treat it like a cross between a dumbbell row and a machine row, utilizing benefits of each.",
  category:
        'back_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-823562',
  workoutname:
        'Single-Arm Smith Machine Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This doesn't need to be an 'every workout' move. When you do use it, perform it first in your workout, after warming up well, for 3-4 sets of 6-8 reps.Stop each set before fatigue causes your form to crack.",
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb125-a8-823562',
  workoutname:
        'Push-Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Like the push-press, this is a challenging full-body lift. It was once contested as a powerlift, and with a barbell, remains a popular lift for setting ambitious strength goals.',
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-82153562',
  workoutname:
        'Military Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "What the heck is a row doing in an article about shoulder exercises? Remember,rowing movements don't just work the 'back,'' they involve the rear delts to a significant degree, as well.",
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b386ed-3a48-48eb-a8-823562',
  workoutname:
        'Rear Delt Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Swapping out the barbell for dumbbells on overhead presses works each side independently, which is great for balanced development. The range of motion is also a bit longer, which can help maximize muscle growth.6pg5trb4',
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b31886ed-3a48-48eb-a8-823562',
  workoutname:
        'Seated Dumbbell Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Using a barbell rather than dumbbells may seem like a matter of taste, but there are functional reasons to pick the big bar. For one, you can put a bench in a rack and press off of the safety pins, allowing you to dial in your desired range of motion.Doing barbell-style presses on a Smith machine also allows you to safely push a bit closer to failure than other press variations and really focus on performing slow negatives.',
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '63b3186ed-3a48-48e7b-a8-823562',
  workoutname:
        'Seated Row',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "While some gym rats consider the Smith machine taboo, you shouldn't. The fixed plane of the movement allows you to pull heavy with lots of stability, making for a humbling exercise.Treat it like a cross between a dumbbell row and a machine row, utilizing benefits of each.",
  category:
        'shoulder_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b386ed-3a48-48e67b-a8-823562',
  workoutname:
        'Arnold Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "The standard shoulder-width curl engages the short and long heads of the biceps equally, you can alter grip width to slightly change the emphasis (wide to target the short head, narrow for the long head), you can really pile on the weight, and you don't have to sit there endlessly working one arm at a time.",
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b3824566ed-3a48-48e67b-a8-823562',
  workoutname:
        'Barbell Or EZ-Bar Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This movement seems a lot like the standing barbell curl at first glance. After all, they're both bilateral movements in which you take a shoulder-width, underhand grip on the bar. What makes it different is that, like all of the best muscle-building cable exercises, the angle of loading gives you constant tension on the muscle through the full range of motion.",
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1386ed-3a48-448e67b-a8-8523562',
  workoutname:
        'Cable Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Is this really any different than a barbell curl? That's up to you. Sure, you can do the moves in basically the same way in the same workout, but we don't recommend it. The real value of dumbbell curls is that they can be done a number of ways: standing or seated, with both arms or alternating.In shirt,you have options.",
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '631732b386ed-3a48-48e67b-a8-823562',
  workoutname:
        'Dumbbell Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'If you train back with biceps, this exercise could make a great bridge movement between the two body parts for 3-4 sets of 8-12 reps. It can also be your primary upper-back and biceps move in a home workout if you take a few sets to failure.',
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b781386ed-3a48-48e67b9-a8-823562',
  workoutname:
        'Chin-Up',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Curls with a palms-facing or neutral grip do more than just hit the biceps, they also heavily recruit the brachialis, a muscle that doesn't get measured on EMG studies because it's beneath the biceps. Because it's not as obvious a move as, say, a barbell curl, it often gets undeservedly skipped on arm day.",
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b386ed-3a48-48e67b-a8-823562',
  workoutname:
        'Hammer Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This is detail work, not the main course! Perform these after an exercise like standing curls, in which both biceps heads are targeted with heavy weight.Because of the 'overstretched' arm position at the bottom of the movement, it's best done with relatively light weights and at least 8-12 reps per set.",
  category:
        'bicep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b16386ed-3a48-48e647b-a8-823562',
  workoutname:
        'Incline Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "This move—also known as a lying triceps extension—hammers two of the three heads of the triceps: the long and lateral heads. The most popular version is performed on a flat bench with the elbows locked over the head (hence the name),but it's also great on a decline or incline bench.",
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b117936386ed-3a48-48e647b-a8-823562',
  workoutname:
        'Skullcrusher',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "To really torch the back of your arms, use a close grip, but keep your hands around 8-10 inches apart. Tuck your arms in to decrease the amount of stress on your pecs and shoulders while increasing the demand on your triceps.Perform this movement first or second in your workout. Do 3-4 sets of 6-10 reps. If you're going heavy, don't hesitate to use wrist wraps for extra support.",
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b16386ed-3a48-48e647b-a8-823234562',
  workoutname:
        'Close-Grip Bench Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Dips are a proven mass-builder on their own. Their only problem: Lots of people can't do enough reps to get within the ideal muscle-building rep range of 8-12 reps. Either that, or they can do way too many. In the former case, use the assisted dip/pull-up machine or a band. In the latter, add weight with a dip belt or a light dumbbell between your knees or feet.",
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b16386ed-3a48-48e647b-a8-823562',
  workoutname:
        'Triceps Dip',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'This compound exercise makes it especially easy to pick and change weights for different rep ranges. This makes it easy to do forced reps, dropsets, or even rest-pause sets to boost your intensity.',
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b16386ed-3a48-48e628547b-a8-823562',
  workoutname:
        'Triceps Machine Dip',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Once your arms go overhead, the long head of the triceps gets prioritized. This head is difficult to target otherwise, which is why it's always a good idea to include some kind of overhead exercise in your triceps workout.",
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b16386ed-3a48-48e647b-a8-8184323562',
  workoutname:
        'Dumbbell Overhead Triceps Extension',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "We're not big fans of the dumbbell kick-back because there are so many ways to cheat it and the angle of resistance is less effective than what you can achieve with a resistance band or cable. Surprisingly, one study by ACE fitness found that a well-executed kick-back can be as effective at activating the triceps as either dips or overhead extensions.",
  category:
        'tricep_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1667386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Single-Arm Cable Kick-Back',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Squats are king because they're the most challenging leg movement you can do. They work all the lower-body musculature and have been shown to spike muscle-building hormone release.",
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Barbell Back Squat',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Shifting the bar from the back to the front of the body changes your squat dramatically. Front squats emphasize the quads over the glutes and hams, which means you'll sacrifice some of the load.",
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Barbell Front Squat',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Done right, split squats—particularly rear-foot-elevated or 'Bulgarian' split squats—are devastating to your legs. In fact, EMG evidence suggests that 4 sets using your 10-rep max with Bulgarians create similar quad activation to back squats.",
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Split Squat',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Like all the movements listed thus far, lunges involve hip and knee extension, which gives you the stimulus for both the thighs and glutes. Another advantage: They can be done weighted in traditional muscle-building rep ranges, with dumbbells or a barbell, or with body weight alone for higher reps.',
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Lunge',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        "Leg press vs. squat is a classic weight-room debate, but one that misses the point. Strength coach and physical therapist John Rusin explains why in his article, 'Don't Do High-Rep Squats, Deads, and Bench! Do These Instead.' Squats are for doing early in a leg workout and going heavy, he explains, and leg presses are for doing afterward for high reps. Sounds like a recipe for leg growth to us!",
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Leg Press',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
{
  benifits:
        'Keep it simple: 3-4 sets of 8-12 reps, coming close to muscle failure. This is a low-risk, high-reward move, so occasionally add in some slow negatives or dropsets to make it more intense.',
  category:
        'leg_workout',
  rep:
        '16-10',
  sets:
        '04',
  workout_uuid:
        '632b1624867386ed-3a48-48e6247b-a8-823562',
  workoutname:
        'Leg Curl',
  workoutphoto:
        'https://source.unsplash.com/random/200x200?sig=${i}',
},
];

const workout = JSON.parse(localStorage.getItem('catagory_id'));

if (!workout) {
  localStorage.setItem('catagory_id', JSON.stringify(workouts));
}
