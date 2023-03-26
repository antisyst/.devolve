import './count.scss';
import { FaUserTie } from 'react-icons/fa';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FaUserGraduate } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';


export default function Count() {
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

    return(
        <div className='main-info-section-component-nth flex-row align-center justify-center flex-wrap text-center' id='counter'>
            <div className='import-info_item flex-column align-center justify-center flex-nowrap'>
                <FaUserTie/>
                <div className="counter custom-cout-element count percent font-chillax" data-count="50">0</div>
                <h2 className='m-0'>Teacher</h2>
            </div>
            <div className='import-info_item flex-column align-center justify-center flex-nowrap'>
                <BiCategory/>
                <div className="counter custom-cout-element count percent font-chillax" data-count="10">0</div>
                <h2 className='m-0'>Categories</h2>
            </div>
            <div className='import-info_item flex-column align-center justify-center flex-nowrap'>
                <FaUserGraduate/>
                <div className="counter custom-cout-element count percent font-chillax" data-count="2456">0</div>
                <h2 className='m-0'>Students</h2>
            </div>
        </div>
    )
}