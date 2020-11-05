const Stripe = require('stripe')
const scretKey ='sk_test_51HdsiiImefoL55jVlQJe0ou9thqC5rUlDsaH9ZRMFRGOMedWUvIrilXmbcySK5wuNRMPgLS6Z9pDRu197sFCFAnR005ALELzdI';
const stripe = new Stripe(scretKey)

const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require("koa-bodyparser")
const cors = require("koa-cors");

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())

app.use(async (ctx, next) => {
    const t = new Date()
    await next()
    const rt = new Date() - t
    console.log(rt)
})

router.post("/api/payment_intents", async (ctx) => {
    const { body } = ctx.request
    const { amount } = body 
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd"
        });
        ctx.status = 200
        ctx.body = paymentIntent
    } catch (err) {
        ctx.status = 500
        ctx.body = {
            message: err.message
        }
    }
})

app.use(router.routes())

app.listen(3001, () => {
    console.log("Server starts at: 3001")
})