import React from 'react';
import {MdCurrencyExchange, MdProductionQuantityLimits} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";
import Chart from 'react-apexcharts';

const AdminDashboard = () => {

  const state = {
    series : [
      {
        name: "Orders",
        data: [23,34,45,56,67,78,89,98,56,33,99,90],
      },
      {
        name: "Revenue",
        data: [12,23,34,45,56,67,78,87,44,88,50,80],
      },
      {
        name: "Sellers",
        data: [55,23,88,45,56,99,78,82,23,44,1,70],
      },
    ],
    options: {
      color: ['#181ee8', '#181ee8'],
      plotOptions: {
        radius: 30
      },
      chart: {
        background: 'transparent',
        foreColor: '#d0d2d6'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: ['smooth', 'straight', 'stepline'],
        lineCap: 'butt',
        color: '#f0f0f0',
        width: .5,
        dashArray: 0,
      },
      xaxis : {
        categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      legend : {
        position: 'top'
      },
      responsive : [
        {
          breakpoint: 565,
          yaxis : {
            categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          options : {
            plotOptions: {
              bar: {
                horizontal : true,
              }
            },
            chart : {
              height: '550px'
            }
          }
        }
      ]
    }
  }

  return (
    // px-2 : padding of 0.5rem on small screens
    // md:px-7 : 1.75rem on medium and larger screens
    // py-5: vertical padding of 1.25rem on all screen sizes
    <div className={'px-2 md:px-7 py-5'}>
      { /*
        w-full: l'élément prendra tout l'espace horizontal disponible
        grid: cette classe transforme l'élément en un conteneur de grille
        grid-cols-1: par défaut, le conteneur de la grille devrait avoir une seule colonne
        sm:grid-cols-2: (small) le conteneur de grille devrait avoir deux colonnes
        md:grid-cols-2: (medium) le conteneur de grille devrait avoir deux colonnes
        lg:grid-cols-4: (large) le conteneur de grille devrait avoir quatre colonnes
        gap-7: cette classe définit le gap (l'espace entre chaque enfant de la grille) à 1.75rem (0.25rem * 7)
      */}
      <div className={'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'}>
        { /*
          flex: property to the element, which makes it a flex container
          justify-between: It distributes flex items along the horizontal line
          items-center: property to the element, which vertically aligns flex items
          p-5: This class applies a padding (p) of 1.25rem o all sides of the element.
          bg-[#fae8e8]: This class applies a specific background color (bg) to the element.
          rounded-md: This class applies medium-sized border radius to the element, making the corners rounded.
          gap-3: this class applies a gap (spacing between child elements) of 0.75rem
        */ }
        <div className={'flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'}>
          { /*
          flex: property to the element, which makes it a flex container
          flex-col: This specifies that the children of the container should be laid out in a column
          justify-start: In a flex container, this aligns the flex items along the vertical line
          items-start: Similar to justify-start, but it's used for alignment along the horizontal line of the container.
          text-[#5c5a5a]: This sets the color of the text inside the container to the hex value #5c5a5a.
        */ }
          <div className={'flex flex-col justify-start items-start text-[#5c5a5a]'}>
            <h2 className={'text-3xl font-bold'}>$3434</h2>
            <span className={'text-md font-medium'}>Total Sales</span>
          </div>
          {
            /*
            w-[40px]: This sets the width of the element to 40px.
            h-[47px]: This sets the height of the element to 47px
            rounded-full: This class applies a fully rounded border to the element, making it a circle
            bg-[#fa0305]: This class applies a custom background color
            flex; rule to the element, enabling the use of the CSS Flexbox layout
            justify-center: In a flex context, this class aligns children items centrally along the horizontal line.
            items-center: This class aligns children items centrally along the vertical line.
            text-xl: This sets the text size of the element to extra large.
            */
          }
          <div className={'w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'}>
            <MdCurrencyExchange
              className={'text-[#fa8e8e] shadow-lg'}/>
          </div>
        </div>
        <div className={'flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'}>
          <div className={'flex flex-col justify-start items-start text-[#5c5a5a]'}>
            <h2 className={'text-3xl font-bold'}>50</h2>
            <span className={'text-md font-medium'}>Products</span>
          </div>
          <div className={'w-[40px] h-[47px] rounded-full bg-[#e9feea] flex justify-center items-center text-xl'}>
            <MdProductionQuantityLimits
              className={'text-[#fa8e8e] shadow-lg'}/>
          </div>
        </div>
        <div className={'flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'}>
          <div className={'flex flex-col justify-start items-start text-[#5c5a5a]'}>
            <h2 className={'text-3xl font-bold'}>10</h2>
            <span className={'text-md font-medium'}>Sellers</span>
          </div>
          <div className={'w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'}>
            <FaUsers
              className={'text-[#fa8e8e] shadow-lg'}/>
          </div>
        </div>
        <div className={'flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'}>
          <div className={'flex flex-col justify-start items-start text-[#5c5a5a]'}>
            <h2 className={'text-3xl font-bold'}>123</h2>
            <span className={'text-md font-medium'}>Orders</span>
          </div>
          <div className={'w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'}>
            <FaCartShopping
              className={'text-[#fa8e8e] shadow-lg'}/>
          </div>
        </div>
      </div>

      <div className={'w-full flex flex-wrap mt-7'}>
        <div className={'w-full lg:w-7/12 lg:pr-3'}>
          <div className={'w-full bg-[#6a5fdf] p-4 rounded-md'}>
            <Chart options={state.options}
                   series={state.series}
                   type={'bar'}
                   height={'350'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;