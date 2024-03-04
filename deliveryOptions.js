 export const deliveryOptions=[{
    id:'1',
    devliveryDays:7,
    priceCents:0
},
{
    id:'2',
    devliveryDays:3,
    priceCents:499
},
{
    id:'3',
    devliveryDays:1,
    priceCents:999
},
];

 export function getDeliveryOption(deliveryOptionId)
{
    let deliveryOption;

    deliveryOptions.forEach((option)=>{
    if(option.id===deliveryOptionId)
    {
        deliveryOption=option;
    }
});
return deliveryOption;
}