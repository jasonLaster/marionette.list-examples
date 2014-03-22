marionette list layout examples
===================

This is a collection of examples of how you might want to render a list

1. unordered list
2. table
3. table with an empty state
4. table with an inner empty state
5. nested list of comments

### Implementations

The table with seperate empty state is rendered with a List Layout that toggles between showing a composite view and an empty item view. Other than that, the other views are rendered with collection and composite views.

My hope is that, seeing these five seperate list implementations side-by-side, will help inform api decisions around Collection & Composite Views. 

I think there are several things that could be improved:
1. composite view can be compose in collection view functionality as opposed to inherit from it
2. empty view can be treated as less of an after thought
3. buffers / children logic can be organized better
