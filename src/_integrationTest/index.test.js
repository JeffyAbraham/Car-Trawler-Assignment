import moxios from 'moxios'
import testStore from '../Utilis/index'
import {apiReq} from '../redux/car-reducer/car-action'
import store from '../redux/store'

const expectedState=[{
    title:'some',
    body:'some'
},{
    title:'some',
    body:'some'
},
]
describe('get the car collection',()=>{
    beforeEach(()=>{
        moxios.install()
    })
    afterEach(()=>{
        moxios.uninstall()
    })
    
    moxios.wait(()=>{
        const request=moxios.requests.mostRecent();
        request.respondWith({
            status:200,
            response:expectedState
        })
    })
    return store.dispatch(apiReq()).then(()=>{
        const newState=testStore.getState();
        console.log(newState)

    })


})