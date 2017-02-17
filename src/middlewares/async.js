export default function() {
    return next => action => {

        if(!action.payLoad || !action.payLoad.then) {
            return next(action);
        }

        next({...action, status: 'start'});
        action.payLoad.then((response) => {

            next({...action, status: 'start', payLoad: response});
        }).catch((e) => {
            
            next({...action, status: 'failed', payLoad: e});
        });
    }
}