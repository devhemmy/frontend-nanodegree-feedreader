/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* thi is a test to make sure that every elemet in the object
         * has a url and that url is not empty by looping through every element
         * in the object and check on  them
         */
         it('has a URL', function(){
           allFeeds.forEach(function(val){
             expect(val.url).toBeDefined();
             expect(val.url.length).not.toBe(0);
           });
         });


        /* this is a test that does just like the previous one
         * but on names this time instead of url
         */

         it('has a name', function(){
           allFeeds.forEach(function(val){
             expect(val.name).toBeDefined();
             expect(val.name.length).not.toBe(0);
           });
         });

    });


    /* a new test suite named "The menu" */
    describe("The menu",function(){

      /* this test making sure the menu is hidden by default
       * by checking it has the hidden class already in the body
       */
       it('is hidden by default',function(){
         expect($('body').hasClass('menu-hidden')).toBe(true);

       });

       /* this test makes a menu click twice
        * to check wether if the visibility changes on each click or not
        */


        it('changes visibility',function(){
          var menu = $('a.menu-icon-link');
          menu.click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          menu.click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });



    /* a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
      var container = $('.feed')
      beforeEach(function(done){
        loadFeed(0,function(){
          done();
        });
      });
      /* this test makes sure that the loadFeed function has completed already
       * first by calling the beforeEach function then check for
       * childs with the class of enter-link to make sure that that function
       * has completed successfully and the childs has been appended
       */
       it('function completed',function(done){
         expect(container.children().hasClass('entry-link')).toBe(true);
         done();
       });

    });



    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        var container1 = $('.feed');
      beforeEach(function(done){
        loadFeed(0,function(){
          loadFeed(1,function(){
            done();
          });
        });
      });
        var container2 = $('.feed');

      /* this test makes sure that the element changes by loading
       * the loadFeed function by draging thoes elements from a certain link
       */

       it('actually changes',function(done){
         expect(container1).not.toBe(container2);
         done();
       });

    });

}());
