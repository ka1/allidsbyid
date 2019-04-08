allidsbyid
====

A set of functions to modify normalized objects like
```json
    {
        "allIds": ["a", "b"],
        "byId": {
            "a": {"value": "a"},
            "b": {"value": "b", "more": "b"}
        }
    }
```

The objects are not mutated and can be used for react/redux.