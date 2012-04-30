define [], () ->
  Backbone.View.extend
    
    initialize: ->
      @render()

    # override this in your view to give template a rendering context
    render: ->
      @$el.html(@template)

    # Show hides other pages and show current page (called by router).
    # Also handles navigation bar state
    show: ->
      console.log 'show '+@$el.attr('id')
      $("#content .page").hide()
      @$el.show()

      $("#navigation").children().removeClass('active').each(->
        href = $(this).find('a').attr('href')
        if href == '#'+Backbone.history.fragment
          $(this).addClass('active')
      )