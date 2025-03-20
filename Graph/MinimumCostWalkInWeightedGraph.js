var minimumCost = function(n, edges, query) {
    let parent = Array.from({ length: n }, (_, i) => i);
    let cost = new Array(n).fill(-1);
    let result = new Array(query.length);

    const find = (x) => {
        if(parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }

    const union = (x, y) => {
        parent[y] = x;
    }

    for(let [u,v,w] of edges) {
        let parentU = find(u);
        let parentV = find(v);

        if(parentU !== parentV) {
            cost[parentU] &= cost[parentV];
            union(parentU, parentV);
        }
        cost[parentU] &= w;
    }

    for(let i = 0; i<query.length; i++) {
        let [s,t] = query[i];
        let p1 = find(s);
        let p2 = find(t);

        if(s === t) result[i] = 0;
        else if(p1 !== p2) result[i] = -1;
        else result[i] = cost[p1];
    }
    return result;
};