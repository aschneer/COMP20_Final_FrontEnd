Date: 2015/04/04
Outline of Tasks + Responsibilities

###Tasks

- Mobile/Desktop site
- Index page:
    - choose between:
        - Restaurant
        - Customer
    - Restaurant Page:
        - lets you post
        - view claimed orders
        - view your offers
    - Customer Page:
        - view claimed orders (yours)
            - uses local storage
        - view offers
        - view map
- Forms
    - Send to Database
- Database
    - routes for:
        - post offer
            - HTTP POST
            - path: '/sendOffer'
            - parameters:
                - {"provider":string, "food":string, "address":string, "when":Date}
            - returns:
                - _id if OK!
                - 300 if BAD!
        - claim offer
            - HTTP POST
            - path: '/claimOffer'
            - paramters:
                - {"_id":_id}
        - get offers
            - HTTP GET
            - path '/offers.json?provider=name'
        - request offers
            - HTTP GET
            - path '/allOffers'
            - returns:
                [{"provider":string, "food":string, "address":string, "when":Date}, ...]
        - request claimed offers
            - HTTP GET 
            - path '/claimedOffers?provider=name'
            - returns:
                - [{"provider":string, "food":string, "address":string, "when":Date, "by":string}, ...]