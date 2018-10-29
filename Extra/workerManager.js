let dataArray = [
  {
    managerWork: 20,
    workerWork: 8,
    workSites: [
      {
        name: 'Site1',
        workToComplete: 20
      },
      {
        name: 'Site2',
        workToComplete: 62
      }
    ]
  },
  {
    managerWork: 2,
    workerWork: 10,
    workSites: [
      {
        name: 'Site1',
        workToComplete: 30
      },
      {
        name: 'Site2',
        workToComplete: 62
      }
    ]
  },
  {
    managerWork: 12,
    workerWork: 7,
    workSites: [
      {
        name: 'Site1',
        workToComplete: 11
      },
      {
        name: 'Site2',
        workToComplete: 21
      }
    ]
  },
  {
    managerWork: 20,
    workerWork: 8,
    workSites: [
      {
        name: 'Site1',
        workToComplete: 21
      },
      {
        name: 'Site2',
        workToComplete: 62
      },
      {
        name: 'Site3',
        workToComplete: 18
      },
      {
        name: 'Site4',
        workToComplete: 42
      }
    ]
  }
];

// Answers are as follows:
/*
  Day 1: 
    Workers required: 8, Manager placement: Site1

  Day 2:
    Workers required: 9, Manager placement: Site2

  Day 3:
    Workers required: 3, Manager placement: Site1

  Day 4:
    Workers required: 17, Manager placement: Site3 

*/

// Calculations:
// How to find how many workers are required
// workersRequired = Math.ceil(site.workToComplete / workerWork);

// How to find how many workers can be replaced by a manager:
// numReplaced =
//   workersRequired - Math.ceil((site.workToComplete - managerWork) / workerWork);

function manageWorkers(obj) {
  // Step 1: Simplify and make the data we need easily accessible
  let managerWork = obj.managerWork;
  let workerWork = obj.workerWork;
  let sites = obj.workSites;

  // replacedWorkers/Index will keep track of the MOST amount of workers the manager can replace, and where at
  let replacedWorkers = 0;
  let replacedIndex = 0;

  // workerArr will keep track of how many workers are required per site
  let workerArr = sites.map((site, index) => {
    let workersRequired = Math.ceil(site.workToComplete / workerWork);
    let numReplaced; //

    // If he can replace all the workers at this site, numReplaced = workersRequired
    if (managerWork >= site.workToComplete) {
      numReplaced = workersRequired;
    } else {
      // If he can't, find the difference if he was placed at this site.
      numReplaced =
        workersRequired -
        Math.ceil((site.workToComplete - managerWork) / workerWork);
    }

    // Check if this site is where he replaces the most workers
    if (numReplaced > replacedWorkers) {
      replacedWorkers = numReplaced;
      replacedIndex = index;
    }

    return workersRequired;
  });

  // Sum the total number of workers
  let totalWorkers = workerArr.reduce((a, i) => a + i, 0);
  totalWorkers -= replacedWorkers;

  // Give output
  console.log(
    `Workers required: ${totalWorkers}, Manager Placement: ${
      sites[replacedIndex].name
    } `
  );
}

function printResults() {
  dataArray.forEach(day => {
    manageWorkers(day);
  });
}
printResults();
