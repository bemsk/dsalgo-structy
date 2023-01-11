const Node = require('../_bin/linked-list')

const linkedListValues = require('../linked-list/linked-list-values')
const sumList = require('../linked-list/sum-list')
const linkedListFind = require('../linked-list/linked-list-find')
const getNodeValue = require('../linked-list/get-node-value')
const reverseList = require('../linked-list/reverse-list')
const zipperLists = require('../linked-list/zipper-lists')
const mergeLists = require('../linked-list/merge-lists')
const isUnivalueList = require('../linked-list/is-univalue-list')
const longestStreak = require('../linked-list/longest-streak')
const removeNode = require('../linked-list/remove-node')
const insertNode = require('../linked-list/insert-node')
const createLinkedList = require('../linked-list/create-linked-list')
const addList = require('../linked-list/add-list')

describe('linked-list-values', () => {
    test('should return an array containing all values of the nodes in the linked list', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")

        a.next = b
        b.next = c
        c.next = d

        expect(linkedListValues(a)).toStrictEqual([ 'a', 'b', 'c', 'd' ])

        const x = new Node("x")
        const y = new Node("y")

        x.next = y

        expect(linkedListValues(x)).toStrictEqual([ 'x', 'y' ])

        const q = new Node("q")

        expect(linkedListValues(q)).toStrictEqual(['q'])

        expect(linkedListValues(null)).toStrictEqual([])
    })
})

describe('sum list', () => {
    test('should return the total sum of all values in the linked list', () => {
        const a = new Node(2)
        const b = new Node(8)
        const c = new Node(3)
        const d = new Node(-1)
        const e = new Node(7)

        a.next = b
        b.next = c
        c.next = d
        d.next = e

        expect(sumList(a)).toBe(19)

        const x = new Node(38)
        const y = new Node(4)

        x.next = y

        expect(sumList(x)).toBe(42)

        const z = new Node(100)

        expect(sumList(z)).toBe(100)

        expect(sumList(null)).toBe(0)
    })
})

describe('linked list find', () => {
    test('should return a boolean indicating whether or not the linked list contains the target', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")

        a.next = b
        b.next = c
        c.next = d

        expect(linkedListFind(a, 'c')).toBe(true)
        expect(linkedListFind(a, 'd')).toBe(true)
        expect(linkedListFind(a, "q")).toBe(false)

        const node1 = new Node("jason")
        const node2 = new Node("leneli")

        node1.next = node2

        expect(linkedListFind(node1,'jason')).toBe(true)

        const nodeX = new Node(42)

        expect(linkedListFind(nodeX,42)).toBe(true)
        expect(linkedListFind(nodeX, 100)).toBe(false)
    })
})

describe('get node value', () => {
    test('should return the value of the linked list at the specified index.', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")

        a.next = b
        b.next = c
        c.next = d

        expect(getNodeValue(a, 2)).toBe('c')
        expect(getNodeValue(a, 3)).toBe('d')
        expect(getNodeValue(a, 7)).toBe(null)

        const node1 = new Node("banana")
        const node2 = new Node("mango")

        node1.next = node2

        expect(getNodeValue(node1, 0)).toBe('banana')
        expect(getNodeValue(node1, 1)).toBe('mango')
    })
})

describe('reverse list', () => {
    test('should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.next = b
        b.next = c
        c.next = d
        d.next = e
        e.next = f

        // reversed
        const g = new Node("f")
        const h = new Node("e")
        const i = new Node("d")
        const j = new Node("c")
        const k = new Node("b")
        const l = new Node("a")

        g.next = h
        h.next = i
        i.next = j
        j.next = k
        k.next = l

        expect(reverseList(a)).toStrictEqual(g)

        const x = new Node("x")
        const y = new Node("y")

        x.next = y

        // reversed
        const m = new Node("y")
        const n = new Node("x")

        m.next = n

        expect(reverseList(x)).toStrictEqual(m)

        const p = new Node("p")

        expect(reverseList(p)).toStrictEqual(p)
    })
})

describe('zipper list', () => {
    test('should zipper the two lists together into single linked list by alternating nodes and return the head of the zippered list', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        a.next = b
        b.next = c

        const x = new Node("x")
        const y = new Node("y")
        const z = new Node("z")
        x.next = y
        y.next = z

        // zipped
        const a_zipped = new Node("a")
        const x_zipped = new Node("x")
        const b_zipped = new Node("b")
        const y_zipped = new Node("y")
        const c_zipped = new Node("c")
        const z_zipped = new Node("z")

        a_zipped.next = x_zipped
        x_zipped.next = b_zipped
        b_zipped.next = y_zipped
        y_zipped.next = c_zipped
        c_zipped.next = z_zipped

        expect(zipperLists(a, x)).toStrictEqual(a_zipped)

        const m = new Node("a")
        const n = new Node("b")
        const o = new Node("c")
        const p = new Node("d")
        const q = new Node("e")
        const r = new Node("f")
        m.next = n
        n.next = o
        o.next = p
        p.next = q
        q.next = r

        const i = new Node("x")
        const j = new Node("y")
        const k = new Node("z")
        i.next = j
        j.next = k

        //zipped
        const m_zipped = new Node("a")
        const i_zipped = new Node("x")
        const n_zipped = new Node("b")
        const j_zipped = new Node("y")
        const o_zipped = new Node("c")
        const k_zipped = new Node("z")
        const p_zipped = new Node("d")
        const q_zipped = new Node("e")
        const r_zipped = new Node("f")

        m_zipped.next = i_zipped
        i_zipped.next = n_zipped
        n_zipped.next = j_zipped
        j_zipped.next = o_zipped
        o_zipped.next = k_zipped
        k_zipped.next = p_zipped
        p_zipped.next = q_zipped
        q_zipped.next = r_zipped

        expect(zipperLists(m, i)).toStrictEqual(m_zipped)

        const s = new Node("s")
        const t = new Node("t")
        s.next = t

        const one = new Node(1)
        const two = new Node(2)
        const three = new Node(3)
        const four = new Node(4)
        one.next = two
        two.next = three
        three.next = four

        // zipped
        const s_zipped = new Node("s")
        const one_zipped = new Node(1)
        const t_zipped = new Node("t")
        const two_zipped = new Node(2)
        const three_zipped = new Node(3)
        const four_zipped = new Node(4)

        s_zipped.next = one_zipped
        one_zipped.next = t_zipped
        t_zipped.next = two_zipped
        two_zipped.next = three_zipped
        three_zipped.next = four_zipped

        expect(zipperLists(s, one)).toStrictEqual(s_zipped)

        const w = new Node("w")

        const satu = new Node(1)
        const dua = new Node(2)
        const tiga = new Node(3)
        satu.next = dua
        dua.next = tiga

        // zipped
        const w_zipped = new Node("w")
        const satu_zipped = satu
        w_zipped.next = satu_zipped

        expect(zipperLists(w, satu)).toStrictEqual(w_zipped)

        const wow_zipped = new Node('w')
        const atu_zipped = new Node(1)
        const dua_zipped = new Node(2)
        const tiga_zipped = new Node(3)

        atu_zipped.next = wow_zipped
        wow_zipped.next = dua_zipped
        dua_zipped.next = tiga_zipped

        expect(zipperLists(satu, w)).toStrictEqual(satu_zipped)
    })
})

describe('merge lists', () => {
    test('should merge the two lists together into single sorted linked list', () => {
        const a = new Node(5)
        const b = new Node(7)
        const c = new Node(10)
        const d = new Node(12)
        const e = new Node(20)
        const f = new Node(28)
        a.next = b
        b.next = c
        c.next = d
        d.next = e
        e.next = f

        const q = new Node(6)
        const r = new Node(8)
        const s = new Node(9)
        const t = new Node(25)
        q.next = r
        r.next = s
        s.next = t

        // merged
        const a_merged = new Node(5)
        const q_merged = new Node(6)
        const b_merged = new Node(7)
        const r_merged = new Node(8)
        const s_merged = new Node(9)
        const c_merged = new Node(10)
        const d_merged = new Node(12)
        const e_merged = new Node(20)
        const t_merged = new Node(25)
        const f_merged = new Node(28)

        a_merged.next = q_merged
        q_merged.next = b_merged
        b_merged.next = r_merged
        r_merged.next = s_merged
        s_merged.next = c_merged
        c_merged.next = d_merged
        d_merged.next = e_merged
        e_merged.next = t_merged
        t_merged.next = f_merged

        expect(mergeLists(a, q)).toStrictEqual(a_merged)

        const i = new Node(5)
        const j = new Node(7)
        const k = new Node(10)
        const l = new Node(12)
        const m = new Node(20)
        const n = new Node(28)
        i.next = j
        j.next = k
        k.next = l
        l.next = m
        m.next = n

        const u = new Node(1)
        const v = new Node(8)
        const w = new Node(9)
        const x = new Node(10)
        u.next = v
        v.next = w
        w.next = x

        const u_merged = new Node(1)
        const i_merged = new Node(5)
        const j_merged = new Node(7)
        const v_merged = new Node(8)
        const w_merged = new Node(9)
        const x_merged = new Node(10)
        const k_merged = new Node(10)
        const l_merged = new Node(12)
        const m_merged = new Node(20)
        const n_merged = new Node(28)

        u_merged.next = i_merged
        i_merged.next = j_merged
        j_merged.next = v_merged
        v_merged.next = w_merged
        w_merged.next = x_merged
        x_merged.next = k_merged
        k_merged.next = l_merged
        l_merged.next = m_merged
        m_merged.next = n_merged

        expect(mergeLists(i, u)).toStrictEqual(u_merged)

        const h = new Node(30)

        const y = new Node(15)
        const z = new Node(67)
        y.next = z

        // merged
        const y_merged = new Node(15)
        const h_merged = new Node(30)
        const z_merged = new Node(67)

        y_merged.next = h_merged
        h_merged.next = z_merged

        expect(mergeLists(h, y)).toStrictEqual(y_merged)
    })
})

describe('is univalue list', () => {
    test('should return a boolean indicating whether or not the linked list contains exactly one unique value', () => {
        const a = new Node(7)
        const b = new Node(7)
        const c = new Node(7)

        a.next = b
        b.next = c

        expect(isUnivalueList(a)).toBe(true)

        const d = new Node(7)
        const e = new Node(7)
        const f = new Node(4)

        d.next = e
        e.next = f

        expect(isUnivalueList(d)).toBe(false)

        const u = new Node(2)
        const v = new Node(2)
        const w = new Node(3)
        const x = new Node(3)
        const y = new Node(2)

        u.next = v
        v.next = w
        w.next = x
        x.next = y

        expect(isUnivalueList(u)).toBe(false)

        const z = new Node('z')

        expect(isUnivalueList(z)).toBe(true)
    })
})

describe('longest streak', () => {
    test('should return the length of the longest consecutive streak of the same value within the list', () => {
        const a = new Node(5)
        const b = new Node(5)
        const c = new Node(7)
        const d = new Node(7)
        const e = new Node(7)
        const f = new Node(6)

        a.next = b
        b.next = c
        c.next = d
        d.next = e
        e.next = f

        expect(longestStreak(a)).toBe(3)

        const u = new Node(3)
        const v = new Node(3)
        const w = new Node(3)
        const x = new Node(3)
        const y = new Node(9)
        const z = new Node(9)

        u.next = v
        v.next = w
        w.next = x
        x.next = y
        y.next = z

        expect(longestStreak(u)).toBe(4)

        const k = new Node(9)
        const l = new Node(9)
        const m = new Node(1)
        const n = new Node(9)
        const o = new Node(9)
        const p = new Node(9)

        k.next = l
        l.next = m
        m.next = n
        n.next = o
        o.next = p

        expect(longestStreak(k)).toBe(3)

        const q = new Node(5)
        const r = new Node(5)

        q.next = r

        expect(longestStreak(q)).toBe(2)

        const s = new Node(4)

        expect(longestStreak(s)).toBe(1)
        expect(longestStreak(null)).toBe(0)
    })
})

describe('remove node', () => {
    test('should delete the node containing the target value from the linked list and return the head of the resulting linked list', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.next = b
        b.next = c
        c.next = d
        d.next = e
        e.next = f

        // removed
        const a_removed = new Node("a")
        const b_removed = new Node("b")
        a_removed.next = b_removed
        b_removed.next = d


        expect(removeNode(a, "c")).toStrictEqual(a_removed)

        const t = new Node("t")

        expect(removeNode(t, "t")).toStrictEqual(null)
    })
})

describe('insert node', () => {
    test('should insert a new node with the value into the list at the specified index', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")

        a.next = b
        b.next = c
        c.next = d


        // inserted
        const a_inserted = new Node("a")
        const b_inserted = new Node("b")
        const x_inserted = new Node("x")
        const c_inserted = new Node("c")
        const d_inserted = new Node("d")

        a_inserted.next = b_inserted
        b_inserted.next = x_inserted
        x_inserted.next = c_inserted
        c_inserted.next = d_inserted

        expect(insertNode(a, 'x', 2)).toStrictEqual(a)
    })
})

describe('create linked list', () => {
    test('should create a linked list containing each element of the array as the values of the nodes', () => {
        const h = new Node("h")
        const e = new Node("e")
        const y = new Node("y")

        h.next = e
        e.next = y

        const a = new Node("a")

        expect(createLinkedList(["h", "e", "y"])).toStrictEqual(h)
        expect(createLinkedList(["a"])).toStrictEqual(a)
        expect(createLinkedList([])).toStrictEqual(null)
    })
})

describe('add list', () => {
    test('should return the head of a new linked listed representing the sum of the input lists', () => {
        const a1 = new Node(9)
        const a2 = new Node(9)
        const a3 = new Node(9)
        a1.next = a2
        a2.next = a3

        const b1 = new Node(6)

        const c1 = new Node(5)
        const c2 = new Node(0)
        const c3 = new Node(0)
        const c4 = new Node(1)

        c1.next = c2
        c2.next = c3
        c3.next = c4

        expect(addList(a1, b1)).toStrictEqual(c1)
    })
})