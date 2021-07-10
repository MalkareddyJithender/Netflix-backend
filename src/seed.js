const Series = require('./models/Series');
const Film = require('./models/Film');

// =====>>>> Series


async function storeSeries()
{
//Documentaries
const tigerKing = await Series({
    title:'Tiger King',
    description:'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
    genre:'documentaries',
    maturity:'18',
    slug:'tiger-king'
}).save();

await Series({
    title:'Amanda Knox',
    description:'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
    genre:'documentaries',
    maturity:'12',
    slug:'amanda-knox'
}).save();

await Series({
    title:'Citizenfour',
    description:'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
    genre:'documentaries',
    maturity:'12',
    slug:'citizenfour'
}).save();

await Series({
    title:'Super Size Me',
    description:"Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
    genre:'documentaries',
    maturity:'12',
    slug:'super-size-me'
}).save();

await Series({
    title:'Man on Wire',
    description:"Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    genre:'documentaries',
    maturity:'12',
    slug:'man-on-wire'
}).save();

//Comedies

await Series({
    title:'The Office',
    description:'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
    genre:'comedies',
    maturity:'15',
    slug:'the-office'
}).save();

await Series({
    title:'Arrested Development',
    description:'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
    genre:'comedies',
    maturity:'15',
    slug:'arrested-development'
}).save();

await Series({
    title:'Curb Your Enthusiasm',
    description:'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
    genre:'comedies',
    maturity:'15',
    slug:'curb-your-enthusiasm'
}).save();

await Series({
    title:'Family Guy',
    description:'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
    genre:'comedies',
    maturity:'15',
    slug:'family-guy'
}).save();

await Series({
    title:'South Park',
    description:'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
    genre:'comedies',
    maturity:'15',
    slug:'south-park'
}).save();

//Children
await Series({
    title:'Peppa Pig',
    description:'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
    genre:'children',
    maturity:'0',
    slug:'peppa-pig'
}).save();

await Series({
    title:'Dora The Explorer',
    description:'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
    genre:'children',
    maturity:'0',
    slug:'dora-the-explorer'
}).save();

await Series({
    title:'PAW Patrol',
    description:'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
    genre:'children',
    maturity:'0',
    slug:'paw-patrol'
}).save();

await Series({
    title:'Arthur',
    description:'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
    genre:'children',
    maturity:'0',
    slug:'arthur'
}).save();

await Series({
    title:'SpongeBob',
    description:'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ',
    genre:'children',
    maturity:'0',
    slug:'spongebob'
}).save();

//Crime
await Series({
    title:'Making a Murderer',
    description:'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
    genre:'crime',
    maturity:'18',
    slug:'making-a-murderer'
}).save();

await Series({
    title:'Long Shot',
    description:'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
    genre:'crime',
    maturity:'18',
    slug:'long-shot'
}).save();

await Series({
    title:'The Confession Killer',
    description:'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
    genre:'crime',
    maturity:'18',
    slug:'the-confession-killer'
}).save();

await Series({
    title:'The Innocent Man',
    description:'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
    genre:'crime',
    maturity:'18',
    slug:'the-innocent-man'
}).save();

await Series({
    title:'The Staircase',
    description:"In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
    genre:'crime',
    maturity:'18',
    slug:'the-staircase'
}).save();

//Feel-good
await Series({
    title:'Good Will Hunting',
    description:'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
    genre:'feel-good',
    maturity:'12',
    slug:'good-will-hunting'
}).save();

await Series({
    title:'Forrest Gump',
    description:'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
    genre:'feel-good',
    maturity:'12',
    slug:'forrest-gump'
}).save();

await Series({
    title:'Juno',
    description:"Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
    genre:'feel-good',
    maturity:'12',
    slug:'juno'
}).save();

await Series({
    title:'Midnight In Paris',
    description:'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
    genre:'feel-good',
    maturity:'12',
    slug:'midnight-in-paris'
}).save();

await Series({
    title:'School of Rock',
    description:"Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
    genre:'feel-good',
    maturity:'12',
    slug:'school-of-rock'
}).save();

};

//======>>>>> Films

async function storeFilms()
{
    //Drama
    await Film({
        title:'Aakaasam Nee Haddhu Ra',
        description:'Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.',
        genre:'drama',
        maturity:'15',
        slug:'aakasham-ni-haddhura'
    }).save();

    await Film({
        title:'Colour Photo',
        description:'Colour Photo is a heart-wrenching love story that stays with you.',
        genre:'drama',
        maturity:'15',
        slug:'colour-photo'
    }).save();

    await Film({
        title:'Hit',
        description:'Vikram Rudraraju (Vishwak Sen) is a cop suffering from PTSD due to a past trauma. He works for the Homicide Intervention Team and takes it upon himself to solve the case of a missing girl for personal reasons; will he be able to do it?',
        genre:'drama',
        maturity:'15',
        slug:'hit'
    }).save();

    await Film({
        title:'Jaanu',
        description:' K Ramachandra (Sharwanand) and S Janaki Devi (Samantha) are high-school sweethearts who meet at a reunion after seventeen long years. What transpires next is stuff bittersweet dreams are made of.',
        genre:'drama',
        maturity:'15',
        slug:'jaanu'
    }).save();

    await Film({
        title:'Krishna And His Leela',
        description:'Krishna has a habit of falling hard when he falls in love and despite getting hurt, wears his heart on his sleeve. Will he ever find a semblance of peace when it comes to love and relationships?',
        genre:'drama',
        maturity:'15',
        slug:'krishna-and-his-leela'
    }).save();

    //Suspense
    await Film({
        title:'Krishnarao Supermarket',
        description:'Hyderabad is plagued with a string of strange serial murders that are all connected to Krishna Rao Supermarket. Meanwhile, a kickboxer, Arjun, wins the love of Sanjana before becoming the prime murder suspect.',
        genre:'suspense',
        maturity:'15',
        slug:'krishnarao-supermarket'
    }).save();

    await Film({
        title:'Deyyam',
        description:"A couple move into their new farmhouse with their son and the wife's sister. The little boy makes a few imaginary friends who talk to him but it is soon revealed that his friends are actually ghosts.",
        genre:'suspense',
        maturity:'15',
        slug:'deyyam'
    }).save();

    await Film({
        title:'Udgharsha',
        description:"Aditya and Rashmi attend a party where he plans to propose to her. Before he can do so, a guest stumbles upon a corpse. When Rashmi disappears in the ensuing chaos, it is up to Aditya to save her.",
        genre:'suspense',
        maturity:'15',
        slug:'udgharsha'
    }).save();

    await Film({
        title:'Mantra 2',
        description:'Mantra, an orphan, lives happily as a paying guest with an old couple. When some thieves break into the house and attempt to kill her, she learns an eerie truth about the family she is staying with.',
        genre:'suspense',
        maturity:'15',
        slug:'mantra-2'
    }).save();

    await Film({
        title:'Super Sketch',
        description:'The film is based amidst a group of seven friends which includes five boys and two girls. One of the boys in the group, Vasi sets his eyes on a foreign girl and plans to rape her. He makes a perfect sketch and kills her along with his friends.',
        genre:'suspense',
        maturity:'15',
        slug:'super-sketch'
    }).save();

    //children
    await Film({
        title:'Sisindri',
        description:'A rich industrialist finds that his cousin has misused his company funds and dismisses him. To settle scores, his cousin abducts his baby. But the kid turns out to be smarter than his abductors.',
        genre:'children',
        maturity:'0',
        slug:'sisindri'
    }).save();

    await Film({
        title:'Anjali',
        description:'After a few years, Chitra learns that her child, who was believed to be dead, is alive but is suffering from a mental illness. However, her family faces many challenges while looking after her child.',
        genre:'children',
        maturity:'0',
        slug:'anjali'
    }).save();

    await Film({
        title:'Little Soldiers',
        description:'When his grandchildren are orphaned due to an accident, Major Harishchandra Prasad shelters them. Though resentful in the beginning, the children warm up to their grandfather as time passes.',
        genre:'children',
        maturity:'0',
        slug:'little-soldiers'
    }).save();

    await Film({
        title:'Devullu',
        description:"Two children whose parents are about to get divorced visit seven holy shrines at their grandmother's behest who believes the gods are angry with her because she did not fulfil her promise.",
        genre:'children',
        maturity:'0',
        slug:'devullu'
    }).save();

    await Film({
        title:'Manamantha',
        description:"Sairam is a supermarket assistant manager who is eagerly seeking career development. Gayatri is a house wife. Abhiram, the bright student falls in love with Aira. Mahitha is small girl who takes up the mission of joining tiny slum boy into a school.",
        genre:'children',
        maturity:'0',
        slug:'manamantha'
    }).save();

    //Thriller
    await Film({
        title:'Sashi',
        description:'A singer in a local band has issues with anger management and alcohol. A tragedy that occurred in his past tips him over the edge. He then starts stalking a girl whose mental health was impacted due to a similar tragedy that occurred in her life.',
        genre:'thriller',
        maturity:'15',
        slug:'sashi'
    }).save();

    await Film({
        title:'Vakeel Saab',
        description:'Three girls find themselves accused of attempt to murder after escaping molestation. Their only hope is an alcoholic lawyer who agrees to take up the case.',
        genre:'thriller',
        maturity:'15',
        slug:'vakeel-saab'
    }).save();

    await Film({
        title:'Check',
        description:'Aditya (Nithiin) is a death row prisoner facing charges of terrorism. His only hope for living lies in the game of chess.',
        genre:'thriller',
        maturity:'15',
        slug:'check'
    }).save();

    await Film({
        title:'Red',
        description: 'A man’s gruesome murder at his beach home sets off a chain of events that sees two doppelgangers at the centre of it all. Which of these look-alikes has committed the crime?',
        genre:'thriller',
        maturity:'15',
        slug:'red'
    }).save();

    await Film({
        title:'V',
        description:'The showdown between a celebrated cop and a serial killer who challenges the former to nab him results in consequences laced with heavy-duty action, playful romance and dark humor.',
        genre:'thriller',
        maturity:'15',
        slug:'v'
    }).save();

    //Romance
    await Film({
        title:'Uppena',
        description:'Aasi (Panja Vaisshnav Tej) has been in love with Bebamma (Krithi Shetty) since their childhood. But it is more than her father Rayanam (Vijay Sethupathi) that threatens to form a chasm between the lovers.',
        genre:'romance',
        maturity:'15',
        slug:'uppena'
    }).save();

    await Film({
        title:'Most Eligible Bachelor',
        description:'Most Eligible Bachelor is a romantic entertainer movie directed by Bommarillu Bhaskar and produced by Bunny Vas and Vasu Varma. The movie cast includes Akhil Akkineni in the lead role.',
        genre:'romance',
        maturity:'15',
        slug:'most-eligible-bachelor'
    }).save();

    await Film({
        title:'30 Rojullo Preminchatam Ela',
        description:"Two college students, it's hate at first sight for each other. The reason for this hatred is that in their previous birth, they were a bickering couple who die blaming each other without getting married. The film shows how destiny unites them centuries later and turns their hatred into love in just 30 days.",
        genre:'romance',
        maturity:'15',
        slug:'30-rojullo-preminchatam-ela'
    }).save();

    await Film({
        title:'Bheeshma',
        description: "Bheeshma (Nithiin) is a frustrated man who’s tired of being single all his life. When an incident changes his life forever but helps him get close to the woman he loves, how does he deal with it?",
        genre:'romance',
        maturity:'15',
        slug:'bheeshma'
    }).save();

    await Film({
        title:'Kanulu Kanulanu Dochayante',
        description: 'Two fraudsters involved in online shopping scams fall in love and eventually decide to give up their shady business, oblivious to the real intentions of the women they love.',
        genre:'romance',
        maturity:'15',
        slug:'kanulu-kanulani-dochayante'
    }).save();

};

storeSeries();
storeFilms();
console.log('success!!!');


