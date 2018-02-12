# goldengate24k

This project was created with intentions to help develop back-end and front-end of  "**filmsfr**" in coherence.

### Important

- Before you push, make sure you clean the build directory, and rebuild the interface
- This project has no dependency other than dev dependency as typescript for builds, and do not add other dependencies other than stated exceptions

#### Example use of an action

``` typescript
  new SearchLocations({
        text: searchText,
        skip: skip,
        take: this.pageSize
      }).send() // Returns a promise -> Promise<ActionResponse<O>>
```

#### Example implementation of the GoldenGateHttpProvider

Implement the provider as an angular service
``` typescript
  import { Injectable } from '@angular/core';
  import { GoldenGateHttpProvider, RequestBody, ResponseBody, HttpRequest, HttpResponse } from 'goldengate24k';
  import { environment } from '../../environments/environment';

  @Injectable()
  export class GoldenGate implements GoldenGateHttpProvider {
    post<I extends RequestBody, O extends ResponseBody>(request: HttpRequest<I>): Promise<HttpResponse<O>> {
      return fetch(
        environment.http + environment.apiUrl, {
          method: 'POST',
          body: JSON.stringify(request.body),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then(res => res.json())
        .then(res => {
          return <HttpResponse<O>>{
            status: res.status,
            body: res.body
          };
        })
        .catch(error => {
          return <HttpResponse<O>>{
            status: error.status
          };
        });
    }
  }
```

Inject and register the provider in a module constructor
``` typescript
export class SharedModule {
  constructor(private goldenGate: GoldenGate) {
    GoldenGateHttp.use(this.goldenGate);
    ...
  }
}
```

### Pending improvements

- Add joi-browser and declare schema definitions
- Enforce schema validation in "send()" method of "Requestable"
- Enable pretty validation messages, that is easy to integrate with Angular "FormControl"
