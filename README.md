## Question 1

Angular supports 2 types of form; template driven and reactive forms. Hint:
Google ‘Angular template driven reactive’

a. What is the main difference between the forms in terms of their usages?

Reactive and Template-Driven under the hood are implemented in the same way: there is a FormGroup for the whole form, and one FormControl instance per each individual control.

If by some reason we would need to, we could mix and match the two ways of building forms, for example:

we can use ngModelto read the data and use FormBuilder for the validations. we don't have to subscribe to the form or use RxJs if we don't wish to.
We can declare a control in the controller, and then reference it in the template to obtain its validity state
But in general, it's better to choose one of the two ways of doing forms, and using it consistently throughout the application.


b. Give a uses case for template drive and reactive forms.

Template Driven Forms are maybe for simple forms slightly less verbose, but the difference is not significant. Reactive Forms are actually much more powerful and have a nearly equivalent readability.

Most likely in a large-scale application, we will end up needing the functionality of reactive driven forms for implementing more advanced use cases like for example auto-save.

c. What is the rule of thumb you would use to select the appropriate type of
form?

Reactive forms seem great for example for enterprise applications with lots of complex inter-field business validation logic.

For Simplicity then template reference form

## Question 2

An Angular form can be submitted with ngSubmit. But ngSubmit is only
useful if there is a single submit button in the form.
How do you handle multiple submit buttons in a form?

Reactive or 2 way bind then use event binding (click) rather than type submit

## Question 3

If an Angular form is ‘not working’ viz. not responding to submission. What do
you need to check in order to correct this error?

Inspect check for errors. Did you remember to import the module into the @ngmodule

## Question 4

Solution shown in the code.