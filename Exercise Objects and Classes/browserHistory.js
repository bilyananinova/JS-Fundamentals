function browserHistory(object, array) {

    for (let i = 0; i < array.length; i++) {
        let [act, site] = array[i].split(' ');

        if (act == 'Close') {
            if (object['Open Tabs'].includes(site)) {
                let index = object['Open Tabs'].indexOf(site)
                object['Open Tabs'].splice(index, 1);
                object['Recently Closed'].push(site)
            } else {
                continue;
            }
        } else if (act == 'Open') {
            object['Open Tabs'].push(site);
        } else {
            object['Open Tabs'].splice(0, object['Open Tabs'].length);
            object['Recently Closed'].splice(0, object['Recently Closed'].length);
            object['Browser Logs'].splice(0, object['Browser Logs'].length);
            continue;
        }

        object['Browser Logs'].push(array[i]);
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

}
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Close Wikipedia", "Clear History and Cache", "Open Twitter"]
)
