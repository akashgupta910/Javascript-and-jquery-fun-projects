let budget_inp = $('#budget_inp');
let expense_title_inp = $('#expense_title_inp');
let expense_amount_inp = $('#expense_amount_inp');

let budget = 0;
let balance = 0;
let expense = [];
let expense_total = 0;


$(document).ready(function(){

    $('#btn_budget').click(function(){
        if (budget_inp.val() == ""){
            $('#budget-alert').html("This field is Required!").show();
        }
        else if (isNaN(budget_inp.val())) {
            $('#budget-alert').html("Invalid Input!").show();
        }
        else{
            $('#budget-alert').hide();
            budget = budget_inp.val();
            balance = budget_inp.val();
            $('#budget').html(budget);
            $('#balance').html(balance);
        }
    });

    $('#btn_add_expense').click(function(){
        if (expense_amount_inp.val() == "" || expense_title_inp.val() == ""){
            $('#expense-alert').html("This Field is required!").show();
        }
        else if (isNaN(expense_amount_inp.val())) {
            $('#expense-alert').html("Invalid Amount Input!").show();
        }
        else{
            $('#expense-alert').hide();
            $('#expense_title').append('<div id="append_expense_title">' + expense_title_inp.val() + '</div>');
            $('#expense_amount').append('<div id="append_expense_amount">' + expense_amount_inp.val() + '</div>');
            expense.unshift(expense_amount_inp.val());
            for (let i in expense){
                expense_total += parseInt(expense[i]);
                console.log(expense);
            }
            $('#expense').html(expense_total);
            $('#balance').html(balance - expense_total);
            expense_total = 0;
        }
    });

    $('#reset').click(function(){
        location.reload(); 
    });

});