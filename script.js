const ctx = document.getElementById('salesChart');

new Chart(ctx, {
type: 'bar',

data: {
   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

   datasets: [

   {
      type: 'bar',

      label: 'Growth',

      data: [150,130,200,380,150,240,180,350,270,270,130,320],

      backgroundColor: '#6366F1',

      borderRadius: 3,

      barThickness: 12
   },

   {
      type: 'line',

      label: 'Sales',

      data: [200,340,120,150,390,440,580,360,400,640,460,490],

      borderColor: '#d35ab3',

      backgroundColor: 'rgba(255, 103, 179, 0.07)',

      tension: 0.6,

      fill: true,

      pointRadius: 0
   }
   ]
},

options: {
   responsive: true,

   maintainAspectRatio: false,

   plugins: {
   legend: {
      position: 'bottom'
   }
   },

   scales: {
   x: {
      grid: {
         display: false
      }
   },

   y: {
      beginAtZero: true,

      grid: {
         color: '#f1f1f1'
      }
   }
   }
}
});



const orderCtx = document.getElementById('orderChart');

new Chart(orderCtx, {

   type: 'doughnut',

   data: {
      labels: ['Delivered', 'Cancelled', 'Pending', 'Returned'],

      datasets: [{
         data: [40, 25, 20, 15],

         backgroundColor: [
            '#6366F1',
            '#EC4899',
            '#F97316',
            '#A855F7'
         ],

         borderWidth: 0
      }]
   },

   options: {

      responsive: true,

      cutout: '80%',

      rotation: -90,

      circumference: 180,

      plugins: {
         legend: {
            position: 'bottom'
         }
      }
   }
});

const miniCtx = document.getElementById('miniChart');

new Chart(miniCtx, {
   type: 'bar',

   data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

      datasets: [

         {
            label: 'Total',

            data: [90, 100, 60, 95, 125, 160, 115],

            backgroundColor: '#5b6cff',

            borderRadius: 5,

            borderSkipped: false,

            barThickness: 12,

            stack: 'combined'
         },

         {
            label: 'This Year',

            data: [45, 20, 25, 160, 70, 65, 70],

            backgroundColor: '#e056fd',

            borderRadius: 5,

            borderSkipped: false,

            barThickness: 12,

            stack: 'combined'
         },

         {
            label: 'Last Year',

            data: [70, 95, 70, 50, 75, 60, 70],

            backgroundColor: '#ff9f43',

            borderRadius: 5,

            borderSkipped: false,

            barThickness: 12,

            stack: 'combined'
         }
      ]
   },

   options: {

      responsive: true,

      maintainAspectRatio: false,

      layout: {
         padding: {
            top: 10
         }
      },

      plugins: {

         legend: {

            position: 'bottom',

            labels: {
               usePointStyle: true,
               pointStyle: 'circle',
               boxWidth: 8,
               boxHeight: 8,
               padding: 15,
               color: '#7b8093',
               font: {
                  size: 11,
                  weight: 500
               }
            }
         }
      },

      scales: {

         x: {

            stacked: true,

            grid: {
               display: false
            },

            border: {
               display: false
            },

            ticks: {
               color: '#7b8093',
               font: {
                  size: 11
               }
            }
         },

         y: {

            stacked: true,

            beginAtZero: true,

            max: 350,

            ticks: {
               stepSize: 50,
               color: '#7b8093',
               font: {
                  size: 11
               }
            },

            grid: {
               color: '#eef1f7',
               drawBorder: false
            },

            border: {
               display: false
            }
         }
      }
   }
});

function createMiniChart(id, color, data) {

   new Chart(document.getElementById(id), {

      type: 'line',

      data: {
         labels: ['1','2','3','4','5','6','7'],

         datasets: [{
            data: data,

            borderColor: color,

            borderWidth: 2,

            tension: 0.4,

            pointRadius: 0,

            fill: false
         }]
      },

      options: {

         responsive: true,

         maintainAspectRatio: false,

         plugins: {
            legend: {
               display: false
            },

            tooltip: {
               enabled: false
            }
         },

         scales: {
            x: {
               display: false
            },

            y: {
               display: false
            }
         },

         elements: {
            line: {
               capBezierPoints: true
            }
         }
      }
   });
}

createMiniChart(
   'expenseChart',
   '#5b6cff',
   [3,8,4,9,7,10,5]
);

createMiniChart(
   'leadsChart',
   '#e056fd',
   [2,6,5,8,4,9,7]
);

createMiniChart(
   'churnChart',
   '#ff5d9f',
   [5,9,4,5,3,8,6]
);

createMiniChart(
   'usersChart',
   '#ff8e6f',
   [2,4,6,5,7,4,8]
);

createMiniChart(
   'returningChart',
   '#9b59b6',
   [1,3,2,6,4,7,5]
);