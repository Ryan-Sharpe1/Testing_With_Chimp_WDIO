@watch
Feature: Calculating mortgage affordability 
As a new customer
I want to calculate my mortgage costs
So that I can decide whether to take a mortgage with Nationwide

Background: Navigate to home page
    Given I open the url "https://www.nationwide.co.uk"
    And I search for "mortgage calculators" via "mortgages"
    And I choose the "mortgage affordability calculator"
    

Scenario: Calculating mortgage affordability

    # Step 1
    
    When I click the chose "what i would like to do" and click "Buy new property"
    And I choose to "borrow" an amount of "225000"
    And select a mortgage term "year" and "month" of "35" years and "0" months
    And I have clicked "two people applying"
    And I choose the "ownership type" of "standard"
    And I select "Found new home"
    And declare a "purchase price" of "250000"
    And I choose "house type" of "Semi-Detatched"
    And "and" it is "freehold"
    Then I click "next step"

    # Step 2 

    When I enter the date of birth of both applicants:

    |  Day 1   |  21  |
    |  Day 2   |  31  |
    |  Month 1 |  04  |
    |  Month 2 |  03  |
    |  Year 1  | 1996 |
    |  Year 2  | 1995 |

    And I select the following genders for both applicants:

    | Gender of Applicants |
    | Male                 |
    | Female               | 

    Then enter that the following responsibilities for both applicants:

    | Applicant | Responsibility |
    | MainRe    | 0M             |
    | JointRe   | 0J             |

    And confirm the following retirement status of both applicants:

    | Status   |
    | Main No  |
    | Joint No |

    But confirm the following ages of retirement for both applicants:

    | Applicant | Retirement Age |
    | MainRA    |  70M           |
    | JointRA   |  70J           |

    Then I can progress to the "next step"

    # Step 3

    When I select the following employment status for both parties:

    | Main  | Main Employed  |
    | Joint | Joint Employed |

    And I enter the following employment status:

    | Main Contract    | Permanent | 
    | Joint Contract   | Permanent | 
    
    And I then fill in the subsequent information:

    | Main Salary      | 28000     | 
    | Joint Salary     | 22000     | 
    | Main Bonus       | 1000      |
    | Joint Bonus      | 1000      |
    | Main Overtime    | 0         |
    | Joint Overtime   | 0         |
    | Main Commission  | 0         |
    | Joint Commission | 0         |

    And I enter their length of employment:

    | Applicant    | Months | Years |
    | Main Length  | 0      | 7     |
    | Joint Length | 0      | 7     |

    And I enter whether the applicant has a second job:

    | Main Second Job  | No |
    | Joint Second Job | No |

    Then I can click "next step"

    # Step 4

    When I outline the following additional job details:

    | Main Second Job  | No |
    | Joint Second Job | No |

    Then I can click on the "next step" button

    # Step 5

    When the below information is added for both applicants:

    | Main Credit Card            | 600 |
    | Joint Credit Card           | 500 |
    | Main Personal Loans         | 0   |
    | Joint Personal Loans        | 0   |
    | Main Secured Loans          | 0   |
    | Joint Secured Loans         | 0   |
    | Main Buy Now Pay Later      | 0   |
    | Joint Buy Now Pay Later     | 0   |
    | Main Student Loan           | 0   |
    | Joint Student Loan          | 0   |
    | Main Travel Costs           | 0   |
    | Joint Travel Costs          | 200 |
    | Main Maintenance Costs      | 0   |
    | Joint Maintenance Costs     | 0   |
    | Main Regular Monthly Costs  | 75  |
    | Joint Regular Monthly Costs | 50  |

    Then I click the "next step" Button

    # Step 6

    When the following annual payments are input:

    | Council Tax     | 1200 |
    | House Insurance | 180  |

    Then the correct information regarding other mortgages is entered:

    | Main Other Mortgages  | No |
    | Joint Other Mortgages | No |

    Then I can progress to "next step"

    # Step 7

    Given all previous steps are completed as follows:

    | Step 1 | Complete |
    | Step 2 | Complete |
    | Step 3 | Complete |
    | Step 4 | Complete |
    | Step 5 | Complete |
    | Step 6 | Complete |

    # Then the customer is able to borrow "£257,000" over "35 years and 0 months"

    # And the minimum term should be "£225,000" over "18 years and 0 months"



    
