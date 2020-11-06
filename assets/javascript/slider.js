/* --------- Carousel slider by d3ward -------- */

    class Slider {
        constructor(option) {
          this.itemClassName = "slide-item",
          this.items = document.querySelectorAll("#" + option.id + " .slide-item"),
          this.totalItems = this.items.length,
          this.slide = 0,
          this.next = document.querySelector("#" + option.id + " .slide-next"),
          this.prev = document.querySelector("#" + option.id + " .slide-prev");
          this.init();
        }
        init() {
          this.items[this.totalItems - 1].classList.add("prev");
          this.items[0].classList.add("active");
          this.items[1].classList.add("next");
      
          this.next.addEventListener('click', () => { this.moveNext(); });
          this.prev.addEventListener('click', () => { this.movePrev(); });
        }
        moveCarouselTo(slide) {
          var itemClassName = this.itemClassName;
          let prevSlide = slide - 1,nextSlide = slide + 1;
          // Check if current slide is at the beginning or end and sets slide numbers
          if (slide === 0) {prevSlide = (this.totalItems - 1);}
          else if (slide === (this.totalItems - 1)) {
            prevSlide = (slide - 1);
            nextSlide = 0;
          }
          // Clean slides
          this.items.forEach(element => { element.className =itemClassName; });
          // Add the new classes
          this.items[prevSlide].className = itemClassName + " prev";
          this.items[slide].className = itemClassName + " active";
          this.items[nextSlide].className = itemClassName + " next";
        }
        // Next navigation handler
        moveNext() {
          if (this.slide === (this.totalItems - 1)) this.slide = 0;
          else this.slide++;
          this.moveCarouselTo(this.slide);
        }
        // Previous navigation handler
        movePrev() {
          if (this.slide === 0) this.slide = (this.totalItems - 1);
          else this.slide--;
          this.moveCarouselTo(this.slide);
        }
      }